/************************************************************************
 *   MarioBone - A Backbone.Marionette example application.              *
 *               Boilerplate to get started.                Amit Sharma  *
 ************************************************************************/
define(function(require) {
    /* jshint unused:false */
    var Backbone = require("backbone"),
        Marionette = require("marionette"),
        template = require("hbs!templates/mariobone/layout/carLayout");

    return Backbone.Marionette.LayoutView.extend({
        className: "car-layout",
        template: template,
        regions: {
            workspaceRegion: ".workspace-container",
            debuggerRegion: ".debugger-container"
        },
        initialize: function() {
            // Each time the mainLayout.workspace renders a new view, log the event
            this.workspaceRegion.on("show", function(view) {
                console.log("Workspace Region: show : " + view.viewName);
            });
        }
    });
});