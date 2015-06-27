/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/

define(function(require) {
    var Backbone = require("backbone"),
        Marionette = require("marionette"),
        /* jshint unused:false */
        MarionetteSubRouter = require("marionette.subrouter"),
        MainController = require("controllers/mainController");

	return Marionette.SubRouter.extend({
        controller: new MainController(),
        appRoutes: {
            "" : "onHome",
            "home": "onHome",
            "manufacturer/(:manufacturer)": "onManufacturer",
            "manufacturer/(:manufacturer)/(:car)": "onCar"
        },
        onRoute: function(rootOptions, rootOptions1, rootOptions3) {
            this.options = [rootOptions, rootOptions1, rootOptions3];
        }
    });
});