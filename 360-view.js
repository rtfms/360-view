/**
 * Contains information about all 360 views on the page, i.e. this script is loaded once on the page (instead of
 * loading it into each frame)
 */
var am360view_views = {}; // contains framedoc, scene, initTimeout, renderTimeout, orbitingTimeout, sphere/sky

function am360view_updateView(id, params) {

    var UPDATE_THROTTLE = 100; // time in milliseconds limiting the frequency of updates, see scheduleViewUpdate for details
	var ORBITING_TIMEOUT = 30; // time in milliseconds to update the view while orbiting
	var TWO_PI = 2 * Math.PI;  // so that I don't have to recalculate it

    // The delay is added to limit the number of the frame refreshes, so that the
    // updates will be applied only if there were no changes during the throttle period,
    // otherwise too frequent updates (like typing a text) will overload the browser
    function scheduleViewUpdate(o) {
        if (am360view_views[o.id].renderTimeout) {
            clearTimeout(am360view_views[o.id].renderTimeout);
        }
        am360view_views[o.id].renderTimeout = setTimeout(updateView, UPDATE_THROTTLE, o);
    }

	/**
	 * Sometimesthe view cannot be initialized immediately (for instance in the gutenberg editor this will
	 * hack the lack of events.
	 * @param o
	 */
	function scheduleViewInit(o) {
		if (am360view_views[o.id].initTimeout) {
			clearTimeout(am360view_views[o.id].initTimeout);
		}
		am360view_views[o.id].initTimeout = setTimeout(initView, UPDATE_THROTTLE, o);
	}

	function ensureElementUpdated(elementName, parent, id, params, staticAttributes, dynamicAttributes) {
        if(!parent) {
            console.log('360View ERROR: no parent available to update ' + elementName);
            return null;
        }
        var framedoc = am360view_views[id].framedoc;
        var el = framedoc.getElementById(id + '_' + elementName);
        if (!el) {
            el = framedoc.createElement(elementName);
            el.setAttribute('id', id + '_' + elementName);
            for (k in staticAttributes)
                Object.entries(staticAttributes).map(attr => {
                    if( typeof attr[1] !== 'undefined') {
                        el.setAttribute(attr[0], attr[1]);
                    }
                });
            parent.appendChild(el);
        }
        Object.entries(dynamicAttributes).map(attr => {
            if( typeof attr[1] !== 'undefined') {
                el.setAttribute(attr[0], attr[1]);
            }
        });
        return el;
    }

    function removeElement(elementName, id) {
        var framedoc = am360view_views[id].framedoc;
        var el = framedoc.getElementById(id + '_' + elementName);
        if (el) {
            el.remove();
        }
        return el;
    }

	// will likely rewrite this block and unify with other upcoming controls in the next version
    function addVideoControl(id) {
        var framedoc = am360view_views[id].framedoc;
		var playControl = framedoc.getElementById(id + '_videocontrol');
        if( !playControl ) {
			playControl = framedoc.createElement('div');
			playControl.setAttribute('id', id + '_videocontrol');
			playControl.classList.add( 'video-button' );
			playControl.addEventListener('click', function () {
				var vid = framedoc.getElementById(id + '_video');
				if (vid.paused) {
					vid.play();
					playControl.innerText = '\u2590\u2590';
					playControl.setAttribute('style', 'font-size: 10pt; padding: 1px 3px 1px 0px; width: 20px;');
				} else {
					vid.pause();
					playControl.innerText = '\u25b6';
					playControl.setAttribute('style', 'font-size: 10pt; padding: 2px 3px 0px 6px; width: 13px;');
				}
			});
			playControl.innerText = '\u25b6';
			framedoc.body.appendChild(playControl);
		}
    }

	function addOrbitingControl(id) {
		var framedoc = am360view_views[id].framedoc;
		var orbitingControl = framedoc.getElementById(id + '_orbitingcontrol');
		if( !orbitingControl ) {
			var orbitingControl = framedoc.createElement( 'div' );
			orbitingControl.setAttribute( 'id', id + '_orbitingcontrol' );
			orbitingControl.classList.add( 'orbit-button' );
			orbitingControl.innerText = '\u2297';
			orbitingControl.addEventListener( 'click', function() {
				clearTimeout( am360view_views[id].orbitingTimeout );
				if (! am360view_views[id].orbitView) {
					am360view_views[id].orbitView = true;
					orbitingControl.innerText = '\u2297';
					am360view_views[id].orbitingTimeout = setTimeout( orbitView, ORBITING_TIMEOUT, id );
				} else {
					am360view_views[id].orbitView = false;
					orbitingControl.innerText = '\u2299';
				}
			} );
			framedoc.body.appendChild( orbitingControl );
		}
	}

	/**
	 * Implements view orbiting (i.e. rotates the view according to the parameters)
	 * @param o
	 */
	function orbitView(id) {
		var view = am360view_views[id].cameraRig;
		var current = view.getAttribute('rotation');
		[ 'x', 'y', 'z' ].forEach( function( dim ) {
			if( Math.abs( am360view_views[id].orbitingSpeed[dim] ) > 0.00001 ) {
				if (view.object3D.rotation[dim] > TWO_PI) {
					view.object3D.rotation[dim] -= Math.PI * 2;
				}
				view.object3D.rotation[dim] -= am360view_views[id].orbitingSpeed[dim];
			}
		} );
		if( am360view_views[id].orbitView ) {
			am360view_views[id].orbitingTimeout = setTimeout( orbitView, ORBITING_TIMEOUT, id );
		}
	}

	function isVideo() {
		return params.kind === 'video' || params.src && params.src.endsWith('.mp4');
	}

    // updates the scene, creates missing elements and deletes unnecessary ones
    function updateView(o) {
        var framedoc = am360view_views[o.id].framedoc;
        // Gutenberg deletes the iFrame contents when the alignment changes for the first time for the newly added
		// block. I do not know why it does that, but this is the workaround;
        if( !am360view_views[id].framedoc.defaultView ) {
			initView( o );
		}
        var scene = am360view_views[o.id].scene;
        // convert orbiting speed spec into radians
        var three = framedoc.defaultView.THREE;
        var orbitingSpeedSplit = o.params['orbiting-speed'].split(' ');
		am360view_views[o.id].orbitingSpeed = {
			x: three.Math.degToRad( parseFloat( orbitingSpeedSplit[0] ) / 10 ),
			y: three.Math.degToRad( parseFloat( orbitingSpeedSplit[1] ) / 10 ),
			z: three.Math.degToRad( parseFloat( orbitingSpeedSplit[2] ) / 10 ),
		};
		// it makes no sense to continue if the scene doesn't exist yet
        if(!framedoc || !scene) {
            return;
        }
        // configure the view
		var cameraRig = ensureElementUpdated('a-entity', scene, o.id, o.params, {}, {});
        var camera = ensureElementUpdated('a-camera', cameraRig, o.id, o.params, {'look-controls': 'reverseMouseDrag: true'}, {'fov': params.fov});
		if ( isVideo() ) {
            removeElement('a-sky', o.id);
            var assets = ensureElementUpdated('a-assets', scene, o.id, o.params, {'timeout': 50}, {});
            var video = ensureElementUpdated('video', assets, o.id, o.params,
                {autoplay: 'false', preload: 'auto', loop: 'true', crossOrigin: 'anonymous'},
                {src: params.src});
            if (!assets.hasLoaded) {
                assets.addEventListener('loaded', function () {updateView(o)});
                return;
            }
            var sphere = ensureElementUpdated('a-videosphere', scene, o.id, o.params,
                {src: '#' + id + '_video', 'segments-height': 16, 'segments-width': 16},
                {rotation: params.rotation, scale: params.scale,});
			am360view_views[o.id].sphere = sphere;
            var text = ensureElementUpdated('a-text', scene, o.id, o.params, {},
                {
                    font: params['text-font'],
                    value: params['text'],
                    position: params['text-position'],
                    rotation: params['text-rotation'],
                    color: params['text-color'],
                    scale: params['text-scale'],
                });
			addVideoControl(id);
        } else {
            removeElement('playcontrol', o.id);
            removeElement('a-videosphere', o.id);
            removeElement('video', o.id);
            removeElement('a-assets', o.id);
            var sky = ensureElementUpdated('a-sky', scene, o.id, o.params, {}, {
                src: params.src,
                rotation: params.rotation,
                scale: params.scale
            });
			am360view_views[o.id].sky = sky;
			var text = ensureElementUpdated('a-text', scene, o.id, o.params, {},
				{
					font: params['text-font'],
					value: params['text'],
					position: params['text-position'],
					rotation: params['text-rotation'],
					color: params['text-color'],
					scale: params['text-scale'],
				});
        }
		am360view_views[o.id].cameraRig = cameraRig;
		if( params['orbiting-type'] && params['orbiting-type'] != 'none' ) {
        	if( ! framedoc.getElementById(id + '_orbitingcontrol') ) {
				addOrbitingControl( id );
				am360view_views[o.id].orbitView = true;
				clearTimeout( am360view_views[o.id].orbitingTimeout );
				am360view_views[o.id].orbitingTimeout = setTimeout( orbitView, ORBITING_TIMEOUT, o.id );
			}
		} else {
			clearTimeout( am360view_views[o.id].orbitingTimeout );
			var orbitingControl = framedoc.getElementById(id + '_orbitingcontrol');
			if( orbitingControl ) {
				orbitingControl.remove();
			}
        }
	}

    // initializes 3rd party libraries in the frame
    function initView(o) {
        var maxTries = 20;

        // jQuery load in WP is wonky at this point for some reason, so have to use barebones JS/DOM
        function initAFrame(o) {
			am360view_views[o.id].rawframe.width = o.params.width;
			var framedoc = am360view_views[o.id].framedoc;
            if( !framedoc.getElementById(o.id + '_styles') ) {
				var styles = framedoc.createElement( 'link' );
				styles.rel = 'stylesheet';
				styles.id = o.id + '_styles';
				styles.href = params.base + '360-view.css';
				framedoc.head.appendChild( styles );
			}
            if (!framedoc.getElementById(o.id + '_aframe')) {
                var script = framedoc.createElement('script');
                script.type = 'text/javascript';
                script.id = o.id + '_aframe';
                script.src = params.base + 'aframe.min.js';
                framedoc.head.appendChild(script);
            }
            if (framedoc.defaultView && framedoc.defaultView.AFRAME) {
                var scene = ensureElementUpdated('a-scene', framedoc.body, o.id, o.params, {'loading-screen': 'dotsColor: red; backgroundColor: black'}, {});
                am360view_views[o.id].scene = scene;
				maxTries = 0;
                if (scene.hasLoaded) {
                    scheduleViewUpdate(o);
                } else {
                    scene.addEventListener('loaded', function () {scheduleViewUpdate(o)})
                }
            } else {
                maxTries--;
                if (maxTries > 0) {
                    setTimeout(initAFrame, 500, o);
                } else {
                    console.log("360 View ERROR: Giving up, unable to render the view");
                }
            }
        }

		var rawframe = document.querySelector('[data-block-id="' + o.id + '"]');
        if(!rawframe) {
			return scheduleViewInit(o); // the iframe is not initialized yet
        }
        var framedoc = rawframe.contentDocument;
        if (!framedoc) {
            if (rawframe.contentWindow) {
                framedoc = rawframe.contentWindow.document;
            } else {
				return scheduleViewInit(o); // the iframe is not initialized yet
            }
        }
        framedoc.documentElement.lang = "en-US";
        am360view_views[id].framedoc = framedoc;
		am360view_views[id].rawframe = rawframe;
        initAFrame(o);
    }

    if (am360view_views[id] && am360view_views[id].framedoc ) {
        scheduleViewUpdate({id: id, params: params});
    } else {
        am360view_views[id] = {};
        initView({ id: id, params: params});
    }
}

/**
 * this code loads in the end of the HTML and at this point all 360 View placeholders are in place
 * so it just finds all of them and renders the content in them. This mode is only used in the posts when
 * they are viewed by other users. Wordpress admin interface calls am360view_updateView by other means.
 */
jQuery(document).ready(function () {
	const am360ViewAttributes = {}; // flattened version of the attributes tree
	for (const groupName in am360ViewAttributesTree) {
		for (const fieldName in am360ViewAttributesTree[groupName].items) {
			am360ViewAttributes[fieldName] = am360ViewAttributesTree[groupName].items[fieldName];
		}
	}
    var viewports = document.getElementsByClassName('am360view');
    for (var i = 0; i < viewports.length; i++) {
    	const viewParams = {};
		for( const k in am360ViewAttributes ) {
			viewParams[k] = viewports[i].getAttribute(`data-${k}`);
		}
		am360view_updateView(viewports[i].getAttribute( 'data-block-id' ), viewParams);
    }
});

