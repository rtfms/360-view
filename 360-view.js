jQuery(document).ready(function() {
  var viewports = document.getElementsByClassName('a-360-view');
  for (var i = 0; i < viewports.length; i++) {
    render360view(viewports[i].id, JSON.parse(viewports[i].getAttribute( 'data-360-view')));
  }

  function render360view(id, params) {
    var rawframe = document.getElementById(id);
    var framedoc = rawframe.contentDocument;
    if (!framedoc && rawframe.contentWindow) {
      framedoc = rawframe.contentWindow.document;
    }
    framedoc.documentElement.lang = "en-US";
    var script = framedoc.createElement('script');
    script.type = 'text/javascript';
    script.src = '//aframe.io/releases/1.0.4/aframe.min.js';
    framedoc.head.appendChild(script);
    var maxTries = 10;

    function waitForAframe() {
      if (framedoc.defaultView.AFRAME) {
        var scene = framedoc.createElement('a-scene');
        scene.setAttribute('loading-screen', 'dotsColor: red; backgroundColor: black');
        framedoc.body.appendChild(scene);
        function renderScene() {
          var camera = framedoc.createElement('a-camera');
          camera.setAttribute('fov', params.fov);
          scene.appendChild(camera);
          var sky = framedoc.createElement('a-sky');
          sky.setAttribute('src', params.src);
          sky.setAttribute('rotation', params.rotation);
          sky.setAttribute('scale', params.scale);
          scene.appendChild(sky);
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
          renderView();
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
    setTimeout(waitForAframe, 500);
  }
});

