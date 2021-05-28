<?php
/**
 * Plugin Name: 360 View
 * Description: Easily embed any number of 360-degree images and/or videos into your blog posts.
 * Version: 1.1.0
 * Author: Andrey Mikhalchuk
 * Author URI: https://andrey.mikhalchuk.com
 * License: MIT
 */

defined( 'ABSPATH' ) or die( "Just don't do it!" );

require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . '360-view-util.php';

function am360view_scripts() {
	global $am360_view_attributes_tree;
	wp_register_script('360_view', plugin_dir_url( __FILE__ ) . '360-view.js', array('jquery'), '1.1.0', true );
    wp_localize_script( '360_view', 'am360ViewAttributesTree',  $am360_view_attributes_tree);
    wp_enqueue_script( '360_view');
}

add_action( 'wp_enqueue_scripts', 'am360view_scripts' );
add_action( 'admin_enqueue_scripts', 'am360view_scripts' );
add_shortcode( '360', 'am360view_shortcode' );

?>
