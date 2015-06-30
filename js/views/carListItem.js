/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
    /* jshint unused:false */
        utils = require("objects/eventUtilities"),
        Marionette = require("marionette"),
        template = require("hbs!templates/mariobone/views/carListItem");

    return Backbone.Marionette.ItemView.extend({
        template: template,
        className: "car-list-item",
        tagName: "tr",
        events: {
            "click .car-item": "carSelected"
        },
        carSelected: function() {
            console.log("car selected");
        },
        initialize: function(options) {
            this.model = options.model || {};
        }
    });
});