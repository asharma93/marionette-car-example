/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/

define(function(require) {
    var Marionette = require("marionette"),
        //Backbone = require("backbone"),
        utils = require("objects/eventUtilities"),
        CarCollection = require("entities/collections/manufacturerCollection"),
        MainLayout = require("layouts/mainLayout");

    function getRegion(name) {
        return utils.request("getAppRegion", name);
    }
    
    return Marionette.Controller.extend({
        initialize: function() {
            this.mainLayout = new MainLayout();
        },
        onHome: function() {
            var mainContentRegion = getRegion("mainContentRegion");
            mainContentRegion.show(this.mainLayout);
        },
        // Get the Manufacturer name that was selected and find the car models details against the Car Collecion
        onManufacturer: function(car) {
            var manufacturerModels;
            manufacturerModels = CarCollection.findWhere({manufacturer: car});
            console.log("Do something: " + manufacturerModels);
            this.mainLayout.triggerMethod("manufacturer:selected", manufacturerModels);
        },
        onCar: function(options) {
            console.log("Car selected options: " + options);
        }
    });
});
           
        