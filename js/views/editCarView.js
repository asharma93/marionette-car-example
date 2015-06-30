/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/
define(function(require) {
    var MainView,
        Backbone = require("backbone"),
        /* jshint unused:false */
        Marionette = require("marionette"),
        template = require("hbs!templates/mariobone/views/carNew");

    MainView = Backbone.Marionette.ItemView.extend({
        template : template,
        ui: {
            saveBtn: "button.save",
            manufacturerInput: "input[name=manufacturer]",
            modelInput: "input[name=model]",
            yearInput: "input[name=year]",
            imgInput: "input[name=img]"
        },
        events: {
            "click @ui.saveBtn": "updateCar"
        },
        updateCar: function(event) {
            // prevent the form submitting
            event.stopPropagation();
            event.preventDefault();

            // update our model with values from the form
            this.model.set({
                manufacturer: this.ui.manufacturerInput.val(),
                model: this.ui.modelInput.val(),
                year: this.ui.yearInput.val(),
                img: this.ui.imgInput.val()
            });
            // we would post to the server with the model details
            // the server may use the models 'id' to carryout an UPDATE operation
            // this.note.save();

            // redirect back to the index (cancel button has the cars/index href)
            this.$el.find(".cancel").click();
        }

    });

    return MainView;
});