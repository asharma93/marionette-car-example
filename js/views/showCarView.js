/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
    /* jshint unused:false */
        Marionette = require("marionette"),
        template = require("hbs!templates/mariobone/views/showCar");

    return Backbone.Marionette.ItemView.extend({
        template: template,
        className: "car-item"
    });
});