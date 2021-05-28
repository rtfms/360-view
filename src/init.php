<?php
defined( 'ABSPATH' ) or die( "Just don't do it!" );

require_once plugin_dir_path( __FILE__ ) . 'init.php';
require_once plugin_dir_path( __FILE__ ) . '../360-view-util.php';

// NOTE: add ', true, 10, JSON_THROW_ON_ERROR' for debugging, not supported before 7.3.0
$am360_view_attributes_tree = json_decode( file_get_contents( plugin_dir_path( __DIR__ ) . '360-view-attributes.json' ), true, 10 );

function am360view_block_assets() {
	wp_register_style(
		'am360view-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);

	wp_register_script(
		'am360view-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	wp_register_style(
		'am360view-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		null
	);

	wp_localize_script(
		'am360view-cgb-block-js',
		'cgbGlobal',
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
		]
	);

	global $am360_view_attributes_tree;
	wp_localize_script( 'am360view-cgb-block-js', 'am360ViewAttributesTree', $am360_view_attributes_tree );

	register_block_type(
		'am360view/advanced', array(
			'style'         =>   'am360view-cgb-style-css',
			'editor_script' =>   'am360view-cgb-block-js',
			'editor_style'  =>   'am360view-cgb-block-editor-css',
			'render_callback' => 'am360view_shortcode'
		)
	);
}

add_action( 'init', 'am360view_block_assets' );
