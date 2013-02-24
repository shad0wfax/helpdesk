Helpdesk.TicketsTicketView = Ember.View.extend({
    templateName: "ticket_frags/_ticket_details",

    didInsertElement: function() {
        //alert('did insert DashboardView ');
        console.log(" TicketsTicketView, template to use = " + this.templateName);
    }
});

