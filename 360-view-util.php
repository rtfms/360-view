<?php
defined( 'ABSPATH' ) or die( "Just don't do it!" );

function am360view_shortcode($atts = [], $content = null, $tag = '360') {
	$atts = array_change_key_case($atts, CASE_LOWER);

	// flatten the tress and get default values from it
	global $am360_view_attributes_tree;
	$am360ViewAttributes = array();
    $am360viewAttributesString = '';
	if( ! array_key_exists( 'base', $atts ) ) {
		$atts['base'] = plugin_dir_url( __FILE__ );
	}
	if( ! array_key_exists( 'block-id', $atts ) ) {
		$atts['block-id'] = 'am360view_'.rand(100000,999999);
	}
	foreach ( $am360_view_attributes_tree as $groupName => $groupElements ) {
		foreach ( $groupElements['items'] as $fieldName => $fieldValue ) {
			if( !array_key_exists( $fieldName, $atts ) ) {
				$atts[$fieldName] = $fieldValue['default'];
			}
			$am360viewAttributesString .= ' ' . 'data-' . $fieldName . '="' . $atts[$fieldName].'"';
		}
	}
	$extraClass = '';
	$extraStyle = "margin:{$atts['margin']};";
	if ($atts['align'] === 'wide') {
		$extraClass = ' alignwide';
		$$wvr_atts['width'] = '100%';
	} else if ($atts['align'] === 'full') {
		$$wvr_atts['width'] = '100%';
	} else {
		$extraStyle .= "width:{$atts['width']}";
	}
	return <<< HTML
<div class="wp-block am360view-wrapper{$extraClass}" data-align="{$atts['align']}" style="$extraStyle"><iframe
    src="about:blank"
    class="am360view"
	style="width:{$wvr_atts['width']};height:{$atts['height']};float:{$atts['align']};border:0;margin:0 auto;"
	{$am360viewAttributesString}></iframe></div>
HTML;
}
