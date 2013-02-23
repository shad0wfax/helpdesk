Helpdesk.TicketRoute = Ember.Route.extend({
//    setupController: function(controller, model) {
//        console.log("Ticket setup controller called. Setting model to " + Helpdesk.Ticket.find());
//
//        this.controllerFor('tickets').set("model", Helpdesk.Ticket.find());
//        this.controllerFor('tickets').set("ticketsFor", Em.I18n.translations["tickets.nav.highlights"]);
//    },
//
    model: function(params) {
        console.log("Ticket model function called.  Return model for id " + params.id);
        return Helpdesk.Ticket.find(params.id);
    }
});
