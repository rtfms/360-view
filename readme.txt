=== 360 View  ===
Contributors: mikhalchuk
Tags: vr, panorama, 360, 360 degree, 360 degree images, shortcode, embed
Requires at least: 4.0
Tested up to: 5.6.0
Requires PHP: 7.0
License: MIT
License URI: https://opensource.org/licenses/MIT

Embed multiple 360-degree photos into your wordpress pages and posts  with a shortcode. This plugin also allows adding a simple text label to your photos and provides multiple ways to transform both the label and the view.

== Description ==
Embed 360-degree photos into your blog content with a shortcode.

# FEATURES:
- place multiple 360-degree photos on the same page
- host the photos anywhere (your own server, github, cloud drive, someone else\'s website, i.e. literally anywhere)
- no 3rd party accounts are required. Uploading your images to a 3rd party server is not required either (though cloud hosting of your images is also supported)
- wrap text around the photo
- fullscreen mode
- support for mobile devices and VR headsets
- mobile device and headset position tracking
-  ability to add a 3-d label to the image
-- customize the label position and rotation
-- customize font family
-- customize the label size
- ability to rotate the 360-degree photo (level horizon, change the starting point etc)
- ability to define the viewport width and height
- ability to save a screenshot from the 360-degree photo

# SHORTCODE EXAMPLE
basic example:
[360 src=\"my_favorite-360-degree-image.jpg\" text=\"My Favorite Place\"]
more advanced example:
[360 src=\"my_favorite-360-degree-image.jpg\" text=\"My Favorite Place\" text-position=\"-2 4 -3.5\" text-rotation=\"0 0 0\" width=\"400px\" height=\"400px\" align=\"left\" rotate=\"2 90 20\" text-color=\"#aa0000\" text-width=\"5\" text-scale=\"2 2\"]

# SHORTCODE PARAMETERS
(the values in the parenthesis are the defaults)
- width (\"100%\") - the width of the viewport, could be specified in pixels, percents etc 
- height (\"300px\") - the height of the viewport
- rotation (\"0 0 0\") - the initial rotation of the image (pitch, yaw and roll) in degrees
- scale (\"1 1 1\") - the scale (i.e. how do you want to resize your image) of the image in 3 dimensions
- fov (80) - use this parameter to correct the "fisheye" effect when you are displaying the image in a viewport that's stretched too much (see the FAQ)
- text (\"\") - the text label to display on the image. The default is the empty string (i.e. no text label will be displayed)
- text-position (\"0.0 0.0 -2.5\") - position of the text label in 3d space. It\'s best to keep the 3rd coordinate negative, around 2-5
- text-rotation (\"0 0 0\") - text label rotation (pitch, yaw and roll) in degrees
- text-font (\"kelsonsans\") - the font to use for the text label. Supported options are
-- aileronsemibold
-- dejavu
-- exo2bold
-- exo2semibold
-- kelsonsans
-- monoid
-- mozillavr
-- sourcecodepro
-- standard web font families (Arial, Helvetica, etc) are NOT supported
- text-color (\"lightgrey\") - the font color. Both HTML color names and hex codes are supported
- text-scale (\"1 1\") - font scale (x and y). I.e. if you want to make the font taller, then specify something like \"2 1\".
- src - the URL of the image to display. This URL can be anywhere. For instance if you\'re self-hosting Wordpress, you can upload the image to your media library and list its URL (either relative or absolute) here.
- align (\"left\") - how to align the viewport relative to the rest of the page contents

== Installation ==
If you\'re using wordpress.com or configured plugins installation via Wordpress web UI then 
- go to the Wordpress admin console
- go to Plugins->Add New
- search for \"Wordpress VR\" 
- Click \"Install Now\"
- Click \"Activate\"
If you\'re self-hosting Wordpress or prefer to install the plugins from the command line
- go to /wp-content/plugins
- download the plugin .zip file (use wget or curl) into the plugins directory
- unzip the file (and delete the .zip file if you want to)
- go to Wordpress admin interface
- go to Plugins
- locate \"Wordpress VR\"
- click \"Activate\"

== Frequently Asked Questions ==
= Can I embed video =
Not with this version of this plugin. Anyway, hosting video files on your server is very traffic consuming, so you probably should not be doing that anyway. Using Youtube or similar service would be a lot cheaper and less stressful to your servers.

= Is there a nice web UI for embedding the images =
No and (at least for now) I plan to keep this plugin as a shortcode

= How many 360-degree images can I embed on one page =
As many as you want (though don't use too many - this may make the page too slow on slow computers)

= How can I support you =
- Give 5 stars to this plugin
- Subscribe to my YouTube channel https://www.youtube.com/rtfms and keep posting cheerful comments

= How do I save a screenshot of the 360-degree photo viewport? =
Click on the photo you wish to save and press Control-Alt-S (yes, it's still Control-Alt-S even on Mac, not Command-Alt-S).
This will save the current viewport. If you want to save the entire photo you need to press Control-Alt-Shift-S.

= The center part of the photo looks good, but everything further away from the center looks distorted. How do I fix this? =
You may also notice that the parts of the image close to the left and right edges are are moving unnaturally when you're
looking left and right. It looks like one of those photos made with bad fisheye lens. This happens when you're trying to
fit an image into the viewport that's too stretched horizontally. The photo dimensions are "calibrated" by the vertical
dimension, so the horizontal part gets too stretched at the edges. There are two ways to fix the problem:
- a better way is to always display the image in a viewport with x/y ratio close to 3/4. For instance if you sent the width
to 300 then the height should be close to 400
- if the "better" way is not possible due to your page layout then adjust the "fov" parameter. The default is 80, so try
to reduce it to 40 or even less for extremely stretched images. This will cause some image quality degradation though
because science (optics, to be more specific).

= My picture looks like some kind of kaleidoscope. How do I fix this? =
360 View plugin only supports equirectangular images (at least at the moment). Check your camera software, it most definitely
supports export in the most popular equirectangular format and use that format. If you open your image in a regular photo viewer
and it looks like two circles, that's the wrong format. For instance, in Insta360 One X Studio 2020 you need to open the .insp
file and export it - that will generate the acceptably formatted image.

== Changelog ==
# v0.1.1
The first public release. Provides a shortcode embedding 360-degree photos and adding a text label to it.

# v0.0.0
This version was not released, I was using it only for local testing
