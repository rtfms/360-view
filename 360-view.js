jQuery(document).ready(function() {
  var viewports = document.getElementsByClassName('am360view');
  for (var i = 0; i < viewports.length; i++) {
    render360view(viewports[i].id, JSON.parse(viewports[i].getAttribute( 'data-am360view')));
  }

  function render360view(id, params) {

    var maxTries = 10;
    var framedoc;

    function initAframe() {
      var rawframe = document.getElementById(id);
      framedoc = rawframe.contentDocument;
      if (!framedoc && rawframe.contentWindow) {
        framedoc = rawframe.contentWindow.document;
      }
      framedoc.documentElement.lang = "en-US";
      var script = framedoc.createElement('script');
      script.type = 'text/javascript';
      script.src = params.base+'aframe.min.js';
      framedoc.head.appendChild(script);
      setTimeout(waitForAframe, 500);
    }

    function waitForAframe() {
      if (framedoc.defaultView.AFRAME) {
        var scene = framedoc.createElement('a-scene');
        scene.setAttribute('loading-screen', 'dotsColor: red; backgroundColor: black');
        framedoc.body.appendChild(scene);
        function renderScene() {
          var camera = framedoc.createElement('a-camera');
          camera.setAttribute('fov', params.fov);
          camera.setAttribute('look-controls', 'reverseMouseDrag: true');
          scene.appendChild(camera);
          if(params.kind === 'video' || params.src.endsWith('.mp4')) {
            var assets = framedoc.createElement('a-assets');
            assets.setAttribute('timeout', 50);
            var video = framedoc.createElement('video');
            video.setAttribute('id', 'am_360_view_video');
            video.setAttribute('autoplay', 'false');
            video.setAttribute('preload', 'auto');
            video.setAttribute('loop', 'true');
            //video.setAttribute('playsinline', 'true');
            //video.setAttribute('webkit-playsinline', 'true');
            //video.setAttribute('controls', 'true');
            video.setAttribute('src', params.src);
            //video.setAttribute('crossOrigin', 'anonymous');
            //console.log('Assets loaded: ' + assets.hasLoaded);
            assets.appendChild(video);
            //console.log('Video loaded: ' + video.hasLoaded);
            scene.appendChild(assets);
            var sphere = framedoc.createElement('a-videosphere');
            sphere.setAttribute('src', '#am_360_view_video');
            //sphere.setAttribute('play', 'true');
            sphere.setAttribute('rotation', params.rotation);
            sphere.setAttribute('scale', params.scale);
            sphere.setAttribute('segments-height', 16);
            sphere.setAttribute('segments-width', 16);
            //sphere.setAttribute('autoplay', 'true');

            //append sphere after assets arte loaded or after delay

            scene.appendChild(sphere);
            /*
            var sphere = framedoc.createElement('a-videosphere');
            sphere.setAttribute('crossOrigin', 'anonymous');
            sphere.setAttribute('preload', 'auto');
            sphere.setAttribute('loop', 'true');
            sphere.setAttribute('playsinline', 'true');
            sphere.setAttribute('webkit-playsinline', 'true');
            sphere.setAttribute('controls', 'true');
            sphere.setAttribute('timeout', 10000);
            sphere.setAttribute('src', params.src);
            sphere.setAttribute('play', 'true');
            sphere.setAttribute('rotation', params.rotation);
            sphere.setAttribute('scale', params.scale);
            sphere.setAttribute('segments-height', 16);
            sphere.setAttribute('segments-width', 16);
            sphere.setAttribute('autoplay', 'true');
            scene.appendChild(sphere);
            */
            var playControl = framedoc.createElement('div');
            //playControl.setAttribute('style', 'width: 85px;height: 34px;z-index: 1000000000;position: absolute;bottom: 20px;left: 16px;font-size: 15pt;font-weight: bold;color: gray;border: 3px solid rgba(0,0,0,0.55);border-radius: 8px');
            playControl.setAttribute('style', 'height: 20px; position: absolute;bottom: 20px;left: 16px;font-size: 15pt;font-weight: bold;color: #333;border: 3px solid rgba(0,0,0,0.55);border-radius: 8px;padding: 3px 4px 5px 7px;margin: 0;cursor: pointer;background-color: #eff;');
            playControl.addEventListener('click', function() {
              var vid = framedoc.getElementById('am_360_view_video');
              if( vid.paused ) {
                vid.play();
                playControl.innerText = '\u2590\u2590';
                playControl.setAttribute('style', 'height: 20px; position: absolute;bottom: 20px;left: 16px;font-size: 12pt;font-weight: bold;color: #333;border: 3px solid rgba(0,0,0,0.55);border-radius: 8px;padding: 3px 6px 5px 0px;margin: 0;cursor: pointer;background-color: #eff;');
              } else {
                vid.pause();
                playControl.innerText = '\u25b6';
                playControl.setAttribute('style', 'height: 20px; position: absolute;bottom: 20px;left: 16px;font-size: 15pt;font-weight: bold;color: #333;border: 3px solid rgba(0,0,0,0.55);border-radius: 8px;padding: 3px 4px 5px 7px;margin: 0;cursor: pointer;background-color: #eff;');
              }
            });
            playControl.innerText = '\u25b6';
            framedoc.body.appendChild(playControl);
          } else {
            var sky = framedoc.createElement('a-sky');
            sky.setAttribute('src', params.src);
            sky.setAttribute('rotation', params.rotation);
            sky.setAttribute('scale', params.scale);
            scene.appendChild(sky);
          }
          var text = framedoc.createElement('a-text');
          text.setAttribute('font', params['text-font']);
          text.setAttribute('value', params['text']);
          text.setAttribute('position', params['text-position']);
          text.setAttribute('rotation', params['text-rotation']);
          text.setAttribute('color', params['text-color']);
          text.setAttribute('scale', params['text-scale']);
          scene.appendChild(text);
        }
        if (scene.hasLoaded) {
          renderScene();
        } else {
          scene.addEventListener('loaded', renderScene);
        }
      } else {
        maxTries--;
        if (maxTries > 0) {
          setTimeout(waitForAframe, 500);
        } else {
          console.log("360 View is Giving up, unable to render the view");
        }
      }
    }
    setTimeout(initAframe, 500);
  }
});

