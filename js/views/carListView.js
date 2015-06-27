/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
    /* jshint unused:false */
        Marionette = require("marionette"),
        CarListItem = require("views/carListItem"),
        template = require("hbs!templates/mariobone/views/carList");

    return Backbone.Marionette.CollectionView.extend({
        template: template,
        className: "car-list-panel",
        childView: CarListItem,
        childViewContainer: "ul"
    });
});