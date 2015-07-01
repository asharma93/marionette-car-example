/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
        template = require("hbs!templates/mariobone/views/debugger");
    require("marionette");

    return Backbone.Marionette.ItemView.extend({
        template: template,
        className: "debugger"
    });
});