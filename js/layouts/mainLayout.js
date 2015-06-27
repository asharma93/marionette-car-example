/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    /* jshint unused:false */
    var Backbone = require("backbone"),
        _ = require("underscore"),
        Marionette = require("marionette"),
        CarLayout = require("layouts/carLayoutView"),
        template = require("hbs!templates/mariobone/layout/mainContent");

    return Backbone.Marionette.LayoutView.extend({
        className: "main-content-layout",
        template: template,
        regions: {
            // Remove the banner regions static content if TIME
            mainPanelRegion : "#banner-panel",
            workspaceRegion : "#workspace-panel"
        },
        initialize: function() {
            this.carLayout = new CarLayout();
        },
        // Example of handy event hooks
        onShow: function() {
            console.log("Using on show");
            // show the Car application layout here
            this.workspaceRegion.show(this.carLayout);
        },
        onManufacturerSelected: function(manufacturerModel) {
            this.carLayout.showCars(manufacturerModel);
        }
    });
});