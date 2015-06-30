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
                manufacturer: "",
                model: "",
                year: "",
                img: "img/civic.jpg"
            };
        },
        validate: function(attrs) {
            var errors = {};

            if (!attrs.manufacturer) {
                errors.manufacturer = "Manufacturer";
            }
            if (!attrs.model) {
                errors.model = "Model";
            }
            if (!attrs.year) {
                errors.year = "Year";
            }
            if (!attrs.img) {
                errors.img = "Image Reference";
            }

            if (!_.isEmpty(errors)) {
                errors.message = "You left out:";
                return errors;
            }
        }
    });
});