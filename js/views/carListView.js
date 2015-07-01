/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    var Backbone = require("backbone"),
        CarListItem = require("views/carListItem"),
        template = require("hbs!templates/mariobone/views/carList");
    require("marionette");

    return Backbone.Marionette.CompositeView.extend({
        template: template,
        className: "table table-striped",
        childView: CarListItem,
        childViewContainer: "tbody",
        initialize: function() {
            this.viewName = "carListView";
        },
        onAddChild: function() {
            console.log("CompositeView: add:child");
        },
        onRemoveChild: function() {
            console.log("CompositeView: remove:child");
        }
    });
});