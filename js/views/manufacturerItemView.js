/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
    /* jshint unused:false */
        Marionette = require("marionette"),
        template = require("hbs!templates/mariobone/views/manufacturerItem");

    return Backbone.Marionette.ItemView.extend({
        template: template,
        className: "manufacturer-item",
        tagName: "li",
        initialize: function() {
            console.log("itemview");
        }
    });
});