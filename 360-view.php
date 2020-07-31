<?php
/**
 * Plugin Name: 360 View
 * Description: Easily use 360-degree images in your blog
 * Version: 0.2.1
 * Author: Andrey Mikhalchuk
 * Author URI: https://andrey.mikhalchuk.com
 * License: MIT
 */

defined( 'ABSPATH' ) or die( "Just don't do it!" );

function wp360($atts = [], $content = null, $tag = 'wvr') {
	    $atts = array_change_key_case((array)$atts, CASE_LOWER);
	    $wvr_atts = shortcode_atts([
		    'width' => '100%',
		    'height' => '300px',
		    'fov' => 80,
		    'rotation' => '0 0 0',
		    'scale' => '1 1 1',
		    'text' => '',
		    'text-position' => '0.0 0.0 -2.5',
		    'text-rotation' => '0 0 0',
		    'text-font' => 'kelsonsans',
		    'text-color' => 'lightgrey',
		    'text-scale' => '1 1',
		    'src' => 'test.jpg',
		    'align' => 'left',
		    'margin' => '0 10px 0 0',
		    'src' => plugin_dir_url( __FILE__ ).'default.jpg'
            ], $atts, $tag);
    $js_attrs = array_diff_key($wvr_atts, array_flip(['width', 'height', 'align', 'margin']));
    $id = 'img_360_'.rand(100000,999999);
	$c = '<iframe id='.$id.' src="about:blank" ';
	$c .= 'style="width:'.$wvr_atts['width'].';height:'.$wvr_atts['height'].';float:'.$wvr_atts['align'].';margin:'.$wvr_atts['margin'].'" ';
	$c .= "onload='render360View(\"".$id.'", '.json_encode($js_attrs).")'";
	$c .= '></iframe>';
	return $c;
}

function three_sixty_view_scripts() {
    wp_enqueue_script( '360_view', plugin_dir_url( __FILE__ ) . '360-view.js', array(), '0.1.2', true );
}

add_action( 'wp_enqueue_scripts', 'three_sixty_view_scripts' );
add_shortcode('360', 'wp360');
?>
