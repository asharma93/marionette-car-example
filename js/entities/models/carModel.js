/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/

define(function(require) {
  /* jshint unused:false */
    var Backbone = require("backbone"),
        _ = require("underscore");

    return Backbone.Model.extend({
        defaults: function() {
            return {
                id: "1",
                manufacturer: "Honda",
                model: "Civic",
                year: "2012",
                img: "civic"
            };
        },
        validate: function(attrs) {
            var errors = {};

            if (!attrs.manufacturer) {
                errors.manufacturer = "Please enter a Manufacturer";
            }
            if (!attrs.model) {
                errors.model = "Please enter a Model";
            }
            if (!attrs.year) {
                errors.year = "Please enter a Year";
            }
            if (!attrs.img) {
                errors.img = "Please specify an Image Reference";
            }

            if (!_.isEmpty(errors)) {
                return errors;
            }
        }
    });
});