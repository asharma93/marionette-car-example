/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
    /* jshint unused:false */
        Marionette = require("marionette"),
        ManufacturerCollection = require("entities/collections/manufacturerCollection"),
        ManufacturerItemView = require("views/manufacturerItemView"),
        template = require("hbs!templates/mariobone/layout/mainContent");

    return Backbone.Marionette.CollectionView.extend({
        template: template,
        className: "manufacturer-list-panel",
        childView: ManufacturerItemView,
        childViewContainer: "ul",
        collection: ManufacturerCollection
    });
});