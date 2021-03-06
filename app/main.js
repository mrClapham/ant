// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        // Major libraries
        jquery: '../libs/jquery/jquery-min',
        underscore: '../libs/underscore/underscore-min', // https://github.com/amdjs
        lodash: '../libs/lodash/lodash', // alternative to underscore
        backbone: '../libs/backbone/backbone-min', // https://github.com/amdjs
        sinon: '../libs/sinon/sinon.js',
        leaflet: '../bower_components/leaflet/dist/leaflet',
        stamen: '../libs/stamen/tile.stamen',
        // Require.js plugins
        text: '../libs/require/text',

        //Helper organisation - convenience
        vm: 'helpers/vm',
        events: 'helpers/events',
        enums: 'helpers/enums',

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        templates: 'templates'
    }

   // urlArgs: "bust=" + (new Date()).getTime() //Cache Busting DEV ONLY

});

// Let's kick off the application

require([
    'views/app',
    'router',
    'vm'
], function(AppView, Router, Vm) {
	//Set up global configuration
//    window.config = {};
//    config.webserviceURL = 'http://cloudservices.arcadiagroup.co.uk/storestock/storestock';

    var appView = Vm.create({}, 'AppView', AppView);
    appView.render();
    Router.initialize({appView: appView});  // The router now has a copy of all main appview

});
