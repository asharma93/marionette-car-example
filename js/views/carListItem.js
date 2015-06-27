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
        tagName: "li",
        initialize: function(options) {
            options = options || {};
            this.manufacturer = options.manufacturer;
        },
        serializeData: function() {
            return {
                car: this.model.attributes,
                manufacturer: this.manufacturer
            };
        }
    });
});