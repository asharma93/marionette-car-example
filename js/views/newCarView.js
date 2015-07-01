/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
        _ = require("underscore"),
        template = require("hbs!templates/mariobone/views/carNew");
    require("marionette");

    return Backbone.Marionette.ItemView.extend({
        template: template,
        ui: {
            saveBtn: "button.save",
            manufacturerInput: "input[name=manufacturer]",
            modelInput: "input[name=model]",
            yearInput: "input[name=year]",
            imgInput: "input[name=img]",
            // error elements
            error: ".error",
            alertEl: ".alert"
        },
        events: {
            "click @ui.saveBtn": "saveCar"
        },
        initialize: function(options) {
            this.car = options.car || new Backbone.Model();
            this.cars = options.cars || new Backbone.Collection();
            this.car.bind("invalid", this.showErrors, this);

            this.viewName = "newCarView";
        },
        saveCar: function(event) {
            // prevent the form from submitting
            event.stopPropagation();
            event.preventDefault();

            // update our model with values from the form
            this.car.set({
                manufacturer: this.ui.manufacturerInput.val(),
                model: this.ui.modelInput.val(),
                year: this.ui.yearInput.val(),
                img: this.ui.imgInput.val(),
                // Generating a random id to act a primary key from server
                id: (Math.floor(Math.random() * 100) + 1).toString()
            });

            // Check all the required details have been passed in
            if (this.car.isValid()){

                // add it to the collection
                this.cars.add(this.car);

                // this is where we would post to the server
                //this.car.save();

                // redirect back to the index (cancel button has the cars/index href)
                this.$el.find(".cancel").click();
            }
        },
        showErrors: function(car, errors) {
            this.$el.find(".error").removeClass("error");
            this.$el.find(".alert").html(_.values(errors).join("<br>")).show();
            // highlight the fields with errors
            _.each(_.keys(errors), _.bind(function(key) {
                this.$el.find("*[name=" + key + "]").parent().addClass("error");
            }, this));
        }
    });
});