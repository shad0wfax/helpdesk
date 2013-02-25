Helpdesk.TicketsHighlightsRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log("Highlights setup controller called. Setting model to " + model);

        this.controllerFor('tickets').set("model", model);
        this.controllerFor('tickets').set("ticketsFor", Em.I18n.translations["tickets.nav.highlights"]);
    },

    model: function() {
        console.log("Highlights model function called.  Return all highlight models ");
        return Helpdesk.Ticket.find();
    }
});
