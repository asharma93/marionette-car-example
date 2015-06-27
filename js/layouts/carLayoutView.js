/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    /* jshint unused:false */
    var Backbone = require("backbone"),
        _ = require("underscore"),
        utils = require("objects/eventUtilities"),
        Marionette = require("marionette"),
        ManufacturerListView = require("views/manufacturerListView"),
        CarListView = require("views/carListView"),
        template = require("hbs!templates/mariobone/layout/carLayout");

    return Backbone.Marionette.LayoutView.extend({
        className: "car-layout",
        template: template,
        regions: {
            listRegion: ".list-container",
            displayRegion: ".display-container",
            controlsRegion: ".controls-container"
        },
        // Example of handy event hooks
        onShow: function() {
            console.log("Using on show");
            // show the Car application layout here
            this.listRegion.show(new ManufacturerListView());
            // Show list of cars
        },
        showCars: function(options) {
            console.log(options);
            this.listRegion.show(new CarListView({
                collection: new Backbone.Collection(options.get("cars")),
                childViewOptions: {
                    manufacturer: options.get("manufacturer")
                }
            }));
        }
    });
});