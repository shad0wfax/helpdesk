Helpdesk.TicketsTicketRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        console.log("Tickets_ticket_route setup controller called. Setting model to " + model);

        this.controllerFor('ticket').set("model", model);
//        this.controllerFor('tickets').set("ticketsFor", Em.I18n.translations["tickets.nav.highlights"]);
    }
});
