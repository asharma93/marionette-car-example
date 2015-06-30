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
            workspaceRegion: ".workspace-container",
            debuggerRegion: ".debugger-container"
        },
        onShow: function() {
        }
    });
});