/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
    /* jshint unused:false */
        utils = require("objects/eventUtilities"),
        Marionette = require("marionette"),
        template = require("hbs!templates/mariobone/views/carDetails");

    return Backbone.Marionette.ItemView.extend({
        template: template
    });
});