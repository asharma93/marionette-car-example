/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/

define(function(require) {
    /* jshint unused:false */
    var Backbone = require("backbone");

    return new Backbone.Collection([
        {
            "manufacturer": "Honda",
            "cars": [
                {
                    "model": "Civic",
                    "type": "Type-R",
                    "bhp": "200",
                    "topSpeed": "140mph",
                    "price": "£16,000"
                },
                {
                    "model": "Accord",
                    "type": "Type-R",
                    "bhp": "180",
                    "topSpeed": "140mph",
                    "price": "£18,000"
                },
                {
                    "model": "CR-V",
                    "type": "Type-R",
                    "bhp": "140",
                    "topSpeed": "110mph",
                    "price": "£20,000"
                }
            ]
        },
        {
            "manufacturer": "BMW",
            "cars": [
                {
                    "model": "1 Series",
                    "type": "cool",
                    "bhp": "200",
                    "topSpeed": "140mph",
                    "price": "£16,000"
                },
                {
                    "model": "3 Series",
                    "type": "Coupe",
                    "bhp": "180",
                    "topSpeed": "140mph",
                    "price": "£18,000"
                },
                {
                    "model": "5 Series",
                    "type": "Type-R",
                    "bhp": "140",
                    "topSpeed": "110mph",
                    "price": "£20,000"
                }
            ]
        }
    ]);
});