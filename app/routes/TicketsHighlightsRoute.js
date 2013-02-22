Helpdesk.TicketsHighlightsRoute = Ember.Route.extend({
    redirect: function() {
       console.log("Highlights route called");
    },
    setupController: function() {
        console.log("Highlights setup controller called. Setting model to " + Helpdesk.Ticket.find());

        this.controllerFor('tickets').set("model", Helpdesk.Ticket.find());
        this.controllerFor('tickets').set("ticketsFor", Em.I18n.translations["tickets.nav.highlights"]);
    },

    model: function(params) {
        console.log("Highlights model function called.  Return model for id " + params.id);
        return Helpdesk.Ticket.find(params.id);
    }
});
