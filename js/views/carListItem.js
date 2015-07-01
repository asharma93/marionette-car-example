/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
        template = require("hbs!templates/mariobone/views/carListItem");
    require("marionette");

    return Backbone.Marionette.ItemView.extend({
        template: template,
        className: "car-list-item",
        tagName: "tr",
        events: {
            "click a.delete": "removeChild"
        },
        initialize: function() {
            this.cars = this.model.collection;
        },
        removeChild: function(event) {

            event.preventDefault();
            event.stopPropagation();

            // this is where we would post to the backend and delete this entry
            //this.model.destroy();
            this.cars.remove(this.model);
        },
        onBeforeDestroy: function() {
            console.log("ItemView: before:destroy");
        }
    });
});