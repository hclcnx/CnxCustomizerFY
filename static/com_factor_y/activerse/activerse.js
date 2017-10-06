(function() {

    console.log("Initializing activerse");

    window.activerse = {
        start : function() {
        	targetUrl = "/files/muse-static/pilot/activerse/index_vue.html" + window.location.search + window.location.hash;
            console.log("Replacing activities with: " + targetUrl);
            window.location.replace(targetUrl);
        }
    }

})();