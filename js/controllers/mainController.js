/************************************************************************
*   MarioBone - A Backbone.Marionette example application.              *
*               Boilerplate to get started.                Amit Sharma  *
************************************************************************/

define(function(require) {
    var Marionette = require("marionette"),
        Backbone = require("backbone"),
        $ = Backbone.$,
        utils = require("objects/eventUtilities"),
        CarListView = require("views/carListView"),
        NewCar = require("views/newCarView"),
        ViewCar = require("views/showCarView"),
        EditCar = require("views/editCarView"),
        CarModel = require("entities/models/carModel"),
        DebuggerView = require("views/debuggerView"),
        MainLayout = require("layouts/mainLayout");

    function getRegion(name) {
        return utils.request("getAppRegion", name);
    }
    
    return Marionette.Controller.extend({
        initialize: function() {
            this.carModel = new CarModel();
            this.mainLayout = new MainLayout();
            this.carCollection = new Backbone.Collection();
            this.carCollection.add(this.carModel);

            // Setup Debugger
            this.carCollection.bind("reset", this.updateDebug, this);
            this.carCollection.bind("add", this.updateDebug, this);
            this.carCollection.bind("remove", this.updateDebug, this);
            this.carCollection.bind("change", this.updateDebug, this);
        },
        onIndex: function() {
            var mainContentRegion = getRegion("mainContentRegion");
            if (!mainContentRegion.hasView()) {
                this.mainLayout = new MainLayout();
                mainContentRegion.show(this.mainLayout);
                this.mainLayout.debuggerRegion.show(new DebuggerView());
            }
            this.mainLayout.workspaceRegion.show(new CarListView({
                collection: this.carCollection
            }));
        },
        onCarNew: function() {
            this.mainLayout.workspaceRegion.show(new NewCar({
                car: new CarModel(),
                cars: this.carCollection
            }));
        },
        onCarShow: function(id) {
            this.mainLayout.workspaceRegion.show(new ViewCar({
                model: this.carCollection.findWhere({id: id})
            }));
        },
        onCarEdit: function(id) {
            this.mainLayout.workspaceRegion.show(new EditCar({
                model: this.carCollection.findWhere({id: id})
            }));
        },
        updateDebug: function() {
            $("#collectionOutput").text(JSON.stringify(this.carCollection.toJSON(), null, 4));
        }
    });
});
           
        