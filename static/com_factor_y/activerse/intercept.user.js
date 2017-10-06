
(function() {
  // URL Inteceptor + redirector
  // If the user access the activity application it gets redirected to index_vue.html retaining querystring and hash.

  // console.log('Activities - Interceptor')
  
  window.fymuse = {
      loadCss : function(cssUrl) {
        // console.log("Adding CSS: " + cssUrl);

        var cssNode = document.createElement('link');
        cssNode.rel = "stylesheet";
        cssNode.type = "text/css";
        cssNode.href = cssUrl;
        document.head.appendChild(cssNode);

      },
      loadJs : function(jsUrl) {
        // console.log("Adding JS: " + jsUrl);

        var script = document.createElement('script');
        script.src = jsUrl;
        /*
        script.onload = function () {
            console.log("Script loaded");
        };
        */
        document.head.appendChild(script);
      }
  }

})();

require(["dojo/domReady!"], function() {
    window.fymuse.loadCss("/files/muse-static/pilot/activerse/global.css");
    window.fymuse.loadJs("https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.min.js");
    window.fymuse.loadJs("/files/muse-static/pilot/activerse/demolib.js");
    window.fymuse.loadJs("/files/muse-static/pilot/activerse/activerse.js");
})