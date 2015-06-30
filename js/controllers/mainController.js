/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/

define(function(require) {
    var Marionette = require("marionette"),
        Backbone = require("backbone"),
        utils = require("objects/eventUtilities"),
        CarListView = require("views/carListView"),
        CarModel = require("entities/exampleModel"),
        MainLayout = require("layouts/mainLayout");

    function getRegion(name) {
        return utils.request("getAppRegion", name);
    }
    
    return Marionette.Controller.extend({
        initialize: function() {
            var carModel = new CarModel();
            this.mainLayout = new MainLayout();
            this.collection = new Backbone.Collection();
            this.collection.add(carModel);
        },
        onHome: function() {
            var mainContentRegion = getRegion("mainContentRegion");
            if (mainContentRegion.hasView()) {
                this.mainLayout = new MainLayout();
            }
            mainContentRegion.show(this.mainLayout);
            this.mainLayout.workspaceRegion.show(new CarListView({
                collection: this.collection
            }));
        },
        onCarNew: function() {

        }
    });
});
           
        