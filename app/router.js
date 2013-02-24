// Helpdesk.Router.map(function() {
//   this.route("index', { path: '/'});
// });

Helpdesk.Router.map(function() {
	this.resource("dashboard", { paths: "/dashboard" });
	
	this.resource("tickets", { path: "/tickets" },  function() {
        // Filter resources for ticket:
        this.route("highlights");
        this.route("photos");
        this.route("audios");
        this.route("videos");
        this.route("text");
        this.route("emails");
        this.route("all");
        this.route("open");
        this.route("pending");
        this.route("hold");
        this.route("closed");

        this.route("ticket", { path: "/tickets/:ticket_id" });
    });


    this.resource("configure");
    this.resource("admin");
});
