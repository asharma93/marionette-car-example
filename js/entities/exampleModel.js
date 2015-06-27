/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/

define(function(require) {
  /* jshint unused:false */
    var Backbone = require("backbone"),
        _ = require("underscore");

    return Backbone.Model.extend({
        urlRoot : "api/cars/manufacturer",
        defaults: function() {
            return {
                "name": "",
                "modelCount": ""
            };
        }
    });
});