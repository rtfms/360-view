<?php
/**
 * Plugin Name: 360 View
 * Description: Easily embed any number of 360-degree images and/or videos into your blog posts.
 * Version: 1.0.0
 * Author: Andrey Mikhalchuk
 * Author URI: https://andrey.mikhalchuk.com
 * License: MIT
 */

defined( 'ABSPATH' ) or die( "Just don't do it!" );

require_once plugin_dir_path( __FILE__ ) . 'src/init.php'; // for gutenberg block

function am360view_shortcode($atts = [], $content = null, $tag = 'wvr') {
	$atts = array_change_key_case($atts, CASE_LOWER);

	// flatten the tress and get default values from it
	global $am360_view_attributes_tree;
	$am360ViewAttributes = array();
    $am360viewAttributesString = '';
	if( ! array_key_exists( 'base', $atts ) ) {
		$atts['base'] = plugin_dir_url( __FILE__ ); // TODO: __DIR__ ??
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
	return <<< HTML
<iframe
    src="about:blank"
    class="am360view"
	style="width:{$wvr_atts['width']};height:{$atts['height']};float:{$atts['align']};margin:{$atts['margin']};"
	{$am360viewAttributesString}></iframe>
HTML;
}

function am360view_scripts() {
	global $am360_view_attributes_tree; // TODO: make it non-global
	wp_register_script('360_view', plugin_dir_url( __FILE__ ) . '360-view.js', array('jquery'), '1.0.0', true );
    wp_localize_script( '360_view', 'am360ViewAttributesTree',  $am360_view_attributes_tree);
    wp_enqueue_script( '360_view');
}

add_action( 'wp_enqueue_scripts', 'am360view_scripts' );
add_action( 'admin_enqueue_scripts', 'am360view_scripts' );
add_shortcode( '360', 'am360view_shortcode' );

?>
