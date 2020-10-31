=== 360 View  ===
Contributors: mikhalchuk
Tags: vr, panorama, 360, 360 degree, 360 degree images, 360 degree videos, shortcode, embed
Requires at least: 4.0
Tested up to: 5.5.2
Requires PHP: 7.0
License: MIT
License URI: https://opensource.org/licenses/MIT
Stable tag: trunk

Embed multiple 360-degree photos and/or videos into your wordpress pages and posts  with a shortcode. This plugin also allows adding a simple text label to your photos and videos and provides multiple ways to transform both the label and the view.

== Description ==
Embed 360-degree photos and videos into your blog content with a shortcode. See example here: <a href="https://andrey.mikhalchuk.com/2020/07/09/using-360-degree-photos-in-wordpress.html" target="_new">Using 360-degree Photos and Videos in WordPress</a>

# FEATURES:
* place multiple 360-degree photos and/or videos on the same page
* host the photos anywhere (your own server, github, cloud drive, someone else's website, i.e. literally anywhere)
* no 3rd party accounts are required. Uploading your images to a 3rd party server is not required either (though cloud hosting of your images is also supported)
* wrap text around the photo
* fullscreen mode
* support for mobile devices and VR headsets
* mobile device and headset position tracking
*  ability to add a 3-d label to the image
  * customize the label position and rotation
  * customize font family
  * customize the label size
* ability to rotate the 360-degree photo (level horizon, change the starting point etc)
* ability to define the viewport width and height
* ability to save a screenshot from the 360-degree photo
* ability to play/pause the videos (and no annoying autoplay, respect the visitors of your blog!)

# SHORTCODE EXAMPLE
basic example:
[360 src="my_favorite-360-degree-image.jpg" text="My Favorite Place"]

more advanced example:
[360 src="my_favorite-360-degree-image.jpg" text="My Favorite Place" text-position="-2 4 -3.5" text-rotation="0 0 0" width="400px" height="400px" align="left" rotate="2 90 20" text-color="#aa0000" text-width="5" text-scale="2 2"]

embedding videos:
[360 src="https://andrey.mikhalchuk.com/wp-content/andrey.mikhalchuk.com/eiffel-tower.mp4" rotation="0 50 0" height="400px"]

# SHORTCODE PARAMETERS
The complete list of supported parameters is provided below. The values in the parenthesis are the defaults.

* width ("100%") - the width of the viewport, could be specified in pixels, percents etc 
* height ("300px") - the height of the viewport
* rotation ("0 0 0") - the initial rotation of the image (pitch, yaw and roll) in degrees
* scale ("-1 1 1") - the scale (i.e. how do you want to resize your image) of the image in 3 dimensions. Note that the first parameter -s negative. If you make it positive then the image will be mirrored horizontally.
* fov (80) - use this parameter to correct the "fisheye" effect when you are displaying the image in a viewport that's stretched too much (see the FAQ)
* text ("") - the text label to display on the image. The default is the empty string (i.e. no text label will be displayed)
* text-position ("0.0 0.0 -2.5") - position of the text label in 3d space. It's best to keep the 3rd coordinate negative, around 2-5
* text-rotation ("0 0 0") - text label rotation (pitch, yaw and roll) in degrees
* text-font ("kelsonsans") - the font to use for the text label. Supported options are
  * aileronsemibold
  * dejavu
  * exo2bold
  * exo2semibold
  * kelsonsans
  * monoid
  * mozillavr
  * sourcecodepro
  * standard web font families (Arial, Helvetica, etc) are NOT supported
* text-color ("lightgrey") - the font color. Both HTML color names and hex codes are supported
* text-scale ("1 1") - font scale (x and y). I.e. if you want to make the font taller, then specify something like "2 1".
* src - the URL of the image to display. This URL can be anywhere. For instance if you're self-hosting Wordpress, you can upload the image to your media library and list its URL (either relative or absolute) here.
* align ("left") - how to align the viewport relative to the rest of the page contents
* kind ("photo") - override the autodetect for the media type. If you specify an .mp4 file as the source then the media type will be automatically detected as "video". If you use other kind of a video file, please specify kind="video", otherwise the plugin will try to interpret it as a photo.

== Installation ==
If you're using wordpress.com or configured plugins installation via Wordpress web UI then 

* go to the Wordpress admin console
* go to Plugins->Add New
* search for "Wordpress VR" 
* Click "Install Now"
* Click "Activate"

If you're self-hosting Wordpress or prefer to install the plugins from the command line

* go to /wp-content/plugins
* download the plugin .zip file (use wget or curl) into the plugins directory
* unzip the file (and delete the .zip file if you want to)
* go to Wordpress admin interface
* go to Plugins
* locate "Wordpress VR"
* click "Activate"

== Frequently Asked Questions ==
= Can I embed video? =
Yes, just export the video as an H.264-encoded .mp4 file and use it in the src attribute. If you use some other type of container (i.e. not mp4),
it could work too, but you need to also specify attribute kind="video"

= Is there a nice web UI for embedding the media? =
That's work in progress, hopefully coming soon.

= How many 360-degree photos/videos can I embed on one page? =
As many as you want (though don't use too many - this may make the page too slow on slow computers)

= How can I support you? =
* Give 5 stars to this plugin
* Subscribe to my YouTube channel <a href="https://www.youtube.com/rtfms" target="_new">https://www.youtube.com/rtfms<a> and keep posting cheerful comments

= How do I save a screenshot of the 360-degree photo viewport? =
Click on the photo you wish to save and press Control-Alt-S (yes, it's still Control-Alt-S even on Mac, not Command-Alt-S).
This will save the current viewport. If you want to save the entire photo you need to press Control-Alt-Shift-S.

= The center part of the photo looks good, but everything further away from the center looks distorted. How do I fix this? =
You may also notice that the parts of the image close to the left and right edges are are moving unnaturally when you're
looking left and right. It looks like one of those photos made with bad fisheye lens. This happens when you're trying to
fit an image into the viewport that's too stretched horizontally. The photo dimensions are "calibrated" by the vertical
dimension, so the horizontal part gets too stretched at the edges. There are two ways to fix the problem:
* a better way is to always display the image in a viewport with x/y ratio close to 3/4. For instance if you sent the width
to 300 then the height should be close to 400
* if the "better" way is not possible due to your page layout then adjust the "fov" parameter. The default is 80, so try
to reduce it to 40 or even less for extremely stretched images. This will cause some image quality degradation though
because science (optics, to be more specific).

= My picture looks like some kind of kaleidoscope. How do I fix this? =
360 View plugin only supports equirectangular images (at least at the moment). Check your camera software, it most definitely
supports export in the most popular equirectangular format and use that format. If you open your image in a regular photo viewer
and it looks like two circles, that's the wrong format. For instance, in Insta360 One X Studio 2020 you need to open the .insp
file and export it - that will generate the acceptably formatted image.

= My mobile browser shows strange message when I'm trying to view the 360-degree image: "Set your browser to request the mobile version of the site and reload the page to enjoy immersive mode.". How to fix this? =
This message appears in mobile browsers (Mobile Safari for instance) when it's configured to retrieve the desktop version
of the site instead of mobile. You have two options:
* Just click "Close" and continue watching the photo using the "finger version of drag-and-drop". It's not impressive,
especially since you may not be able to navigate vertically.
* Configure your browser to request the mobile version. In iOS 13 that's Settings->Safari->Request Desktop Website->All Websites
and turn that off. This will allow you to watch the image by moving your mobile device around, it will work like a "portal".
BTW, this will also fix this problem in Chrome since in iOS Chrome is Safari-based.

= My mobile browser asks "This immersive website requires access to your device motion sensors. (Deny/Allow). What do I do? =
You have two options:
* Deny - in this case you will only be able to watch the image by scrolling it horizontally with your finger. That's
less than impressive and very inconvenient.
* Allow - this will allow you to navigate the image by moving the mobile device around. That's a lot more immersive!

= How do I configure video autoplay? =
This is not possible, at least not in this version for couple reasons:
* personally, I dislike autoplay, so don't wasn't to spend much time making it possible. Autoplay is highly annoying and, well, disrespectful to your blog visitors.
* browsers began their war on autoplay and at the moment they handle it inconsistently. While I can reliably enable it under Firefox and, with some work, under Chrome, it is completely unpredictable and unreliable under Safari.
Bottom line: your blog visitors will need to press the "Play" button in the bottom-left corner of the video in order to play it if they want to.

= The video is not playing, I can only see a black rectangle (the audio is playing fine though). How to fix this? =
* Most likely there is something wrong with your video.
* Try recreating/reuploading the video file.
* Make sure it uses tested H.264 codec and .mp4 container format.
* if you're exporting from Insta360Studio, please be aware of the bug it has in export. If you change the resolution, you also need to change the codec to H.265 and then back to H.265, otherwise its export won't be correct.

= My video file is huge, what do I do? =
* Good news: most modern web servers (for instance nginx) support sending portions of huge video files. So if your server is configured correctly, it will be responding with HTTP code 206 (Partial Content) and only the portion of the video that will be played will be actually downloaded into the browser
* Try changing the video file resolution. In most cases 1280x640 is sufficient for embedding into your blogposts. Lower resolution requires smaller files. Please read about the Insta360 Studio big above if you're using it.

= Can I specify a youtube URL in the src attribute? =
No, this plugin is for embedding 360-degree videos and images, not for streaming. If you want to embed a youtube (or some other) 360 video, please find a different plugin developed for embedding youtube videos specifically.

= I pasted the URL of my video into Gutenberg paragraph block, I'm sure the URL is correct, but I'm getting a black rectangle instead of the video/photo. How do I fix this? =
Is the URL in your text shown in blue and underlined? Well, Gutenberg outsmarted you. It decided that since you're pasting a URL it needs to convert it into
HTML that would make your URL clickable. What you need to do is
* click on your block and frame and bunch of buttons will appear around it
* click the 3 vertical dots at the top of the block
* select "Edit as HTML"
* replace the text in src="<replace this text>" with your URL
* optionally click the three vertical dots again and click "Edit Visually"
Now you should see the URL you pasted in normal color and without underlinement and your 360-degree video or photo should render as expected.

= How to I experience all this VR awesomeness of my blog in a VR headset (for instance Oculus Quest)? =
* Launch Firefox Reality
* Go Open your blog in Firefox Reality (just type in the URL into the URL bar)
* You can use the controller and try to drag the pictures, but you will only be able to pan then left and right
* For complete immersive experience click the "VR" button on the image you want to see
* For videos press "Play" button first and then "VR"

= Can I add a text label to the video too? =
Yes your can.

== Screenshots ==
1. Embed your 360-degree image into your text just like a regular image. Great for storytelling!
2. Place multiple 360-degree images next to each other and sync their viewports. Great for comparing two points of view on a mobile device with full motion tracking!
3. Arrange multiple 360-degree views any way you want. Great for seeing multiple places simultaneously!
4. Tons of shortcode parameters to display the images and label them exactly the way you want.
5. Embed your 360-degree videos just as easily as the photos. Format and place them in the post as easily as regular media.

== Changelog ==
# 0.3.0
* Tested with Wordpress 5.5.2
* Improved browser compatibility
* Added support for embedding video files

# 0.2.4
* Improved the readme.txt file. Added low-res banner.

# 0.2.3
* Improved names of the global php functions

# 0.2.2
* Added support for the Field of View and refactored to comply with Wordpress Plugin requirements

# 0.1.1
* The first public release. Provides a shortcode embedding 360-degree photos and adding a text label to it.

# 0.0.0
* This version was not released, I was using it only for local testing
