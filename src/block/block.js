import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	BlockControls,
	InspectorControls,
	BlockAlignmentToolbar,
	MediaPlaceholder,
	MediaReplaceFlow,
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ColorPicker,
	TextareaControl,
	withNotices,
	FocusableIframe,
} = wp.components;

const { Fragment } = wp.element;

const locks = [];

/**
 * Prevents the page from being saved when the block parameters are incorrect
 * @param lockId - a unique lock id (unique for each type of error)
 * @param message - the message to show the user when the update is locked or null/false if there is nothing to lock
 */
function lockUpdate( lockId, message ) {
	if (!! message) {
		if (! locks[lockId]) {
			locks[lockId] = true;
			wp.data.dispatch( 'core/editor' ).lockPostSaving( lockId );
			wp.data.dispatch( 'core/notices' ).createNotice(
				'error',
				message,
				{ id: lockId, isDismissible: false, icon: 'admin-site-alt3' },
			);
		}
	} else if (locks[lockId]) {
		locks[lockId] = false;
		wp.data.dispatch( 'core/notices' ).removeNotice( lockId );
		wp.data.dispatch( 'core/editor' ).unlockPostSaving( lockId );
	}
}

/**
 * List of regular expressions used in 360-view-attributes.json
 * @type {{cssDimensionRegex: RegExp, threeNumbersRegex: RegExp, twoNumbersRegex: RegExp}}
 */
const attributeValidationRegexps = {
	cssDimensionRegex: /^\-?(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)$/i,
	threeNumbersRegex: /^\-?\d+(\.\d+)?\s+\-?\d+(\.\d+)?\s+\-?\d+(\.\d+)?$/i,
	twoNumbersRegex: /^\-?\d+(\.\d+)?\s+\-?\d+(\.\d+)?$/i,
	fourNumbersCss: /^([ ]*((-*\d+(px|em|%|cm|in|pc|pt|mm|ex)|auto|inherit)[ ]*)(!important)*){1,4}$/i,
};

/**
 * List of types used in 360-view-attributes.json
 * @type {{TextControl: string, SelectControl: string, TextareaControl: string, ColorPicker: string, RangeControl: string}}
 */
const attributeControlTypes = {
	TextControl: TextControl,
	RangeControl: RangeControl,
	SelectControl: SelectControl,
	ColorPicker: ColorPicker,
	TextareaControl: TextareaControl,
};

// NOTE: am360ViewAttributesTree is passed from PHP
const am360ViewAttributes = {}; // flattened version of the attributes tree
for (const groupName in am360ViewAttributesTree) {
	for (const fieldName in am360ViewAttributesTree[groupName].items) {
		am360ViewAttributes[fieldName] = am360ViewAttributesTree[groupName].items[fieldName];
	}
}

function get360ViewBlockIframe( props ) {
	const frameAttributes = {
		class: 'am360view',
		src: 'about:blank',
		style: {
			width: props.attributes.width,
			height: props.attributes.height,
			margin: props.attributes.margin,
		},
	};
	for (const k in am360ViewAttributes) {
		frameAttributes[`data-${ k }`] = props.attributes[k];
	}
	return React.createElement( FocusableIframe, frameAttributes );
};

registerBlockType( 'am360view/advanced', {
	title: __( '360 View' ),
	description: __( 'Embed any 360-degree panoramic photos and videos' ),
	category: 'embed',
	icon: 'admin-site-alt3',
	keywords: [
		__( '360' ),
		__( 'panorama' ),
		__( 'photo' ),
		__( 'video' ),
		__( '360 view' ),
		__( 'sphere' ),
		__( 'VR' ),
		__( 'AR' ),
	],
	attributes: am360ViewAttributes,
	supports: {
		//align: true,
		multiple: true,
		anchor: true,
		className: false,
		//customClassName: false,
		//html: false,
	},
	edit: withNotices( ( props ) => {
		am360view_updateView( props.attributes['block-id'], props.attributes );
		const { setAttributes, noticeOperations, noticeUI } = props;
		const ALLOWED_MEDIA_TYPES = [ 'video', 'image' ];
		setAttributes( { base: cgbGlobal.pluginDirUrl } );
		if (! props.attributes['block-id']) {
			setAttributes( { 'block-id': 'am360view_' + _.random( 100000, 999999 ) } );
		}
		const onSelectMedia = ( media ) => {
			if (! media || ! media.url) {
				setAttributes( { src: undefined, 'media-id': undefined } );
				return;
			}
			setAttributes( { src: media.url, 'media-id': media.id } );
		};
		const onSelectURL = ( newURL ) => {
			if (newURL !== url) {
				setAttributes( { src: newURL, 'media-id': undefined } );
			}
		};
		const onUploadError = ( message ) => {
			noticeOperations.removeAllNotices();
			noticeOperations.createErrorNotice( message );
		};
		const updateAlign = ( nextAlign ) => {
			setAttributes( { align: nextAlign } );
		};

		/**
		 * Updates attribute(s) and refreshes the preview
		 * @param attributes
		 */
		const updateAttributes = ( attributes ) => {
			setAttributes( attributes );
			_.each( attributes, ( val, name ) => {
				if (am360ViewAttributes[name] && am360ViewAttributes[name].validationRegexName && am360ViewAttributes[name].validationErrorMessage) {
					const error = val.match( attributeValidationRegexps[am360ViewAttributes[name].validationRegexName] ) ? false : am360ViewAttributes[name].validationErrorMessage;
					lockUpdate( name, error );
				}
			} );
			am360view_updateView( props.attributes['block-id'], props.attributes );
		};

		const blockControls = (
			<BlockControls>
				<BlockAlignmentToolbar
					value={ props.attributes.align }
					onChange={ updateAlign }
					isCollapsed={ false }
				/>
				<MediaReplaceFlow
					mediaId={ props.attributes['media-id'] }
					mediaURL={ props.attributes.src }
					className={ props.attributes.className }
					allowedTypes={ [ 'video', 'image' ] }
					accept="video/*, image/*"
					onSelect={ onSelectMedia }
					onSelectURL={ onSelectURL }
					onError={ onUploadError }
				/>
			</BlockControls>
		);
		const inspectorControls = (
			<InspectorControls>
				{ Object.keys( am360ViewAttributesTree ).map( groupKey => {
					const groupItems = Object.keys( am360ViewAttributesTree[groupKey].items ).map( key => {
						const val = am360ViewAttributesTree[groupKey].items[key];
						if (val.showInSidebar) {
							const options = {
								type: val.type,
								label: __( val.label ),
								value: props.attributes[key] !== undefined ? props.attributes[key] : val.default,
								placeholder: val.default,
								onChange: newValue => updateAttributes( { [key]: newValue } ),
								help: val.help,
							};
							if (val.controlProperties) {
								_.extend( options, val.controlProperties );
							}
							return React.createElement( attributeControlTypes[val.control], options );
						}
					} );
					return React.createElement( PanelBody, {
						title: __( am360ViewAttributesTree[groupKey].title ),
						initialOpen: am360ViewAttributesTree[groupKey].initialOpen === true,
					}, groupItems );
				} ) }
			</InspectorControls>
		);
		const preview = props.attributes.src ? get360ViewBlockIframe( props ) : (
			<MediaPlaceholder
				icon='embed-photo'
				labels={ {
					title: __( '360 Photo or Video' ),
					instructions: __( 'Drag and drop, enter URL or choose media library 360 degree photo or video.' ),
				} }
				onSelect={ onSelectMedia }
				onSelectURL={ onSelectURL }
				accept="video/*, image/*"
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				notices={ noticeUI }
				onError={ noticeOperations.createErrorNotice }
			/>
		);
		return (
			<Fragment>
				{ blockControls }
				{ inspectorControls }
				{ preview }
			</Fragment>
		);
	} ),
	save: ( props ) => {
		am360view_updateView( props.attributes['block-id'], props.attributes );
		return get360ViewBlockIframe( props );
	},
} );
