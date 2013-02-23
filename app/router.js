// Helpdesk.Router.map(function() {
//   this.route("index', { path: '/'});
// });

Helpdesk.Router.map(function() {
	this.resource("dashboard", { paths: "/dashboard" });
	
	this.resource("tickets", { path: "/tickets" },  function() {
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

        //this.route("ticket', { paths: "/:ticket_id" });
//        this.resource("ticket", { path: "/ticket" }, function(){
//            this.route("edit", { path: "/:ticket_id" });
//        });
    });

    this.route("ticket", { path: "/tickets/:ticket_id" });

    this.resource("configure");
    this.resource("admin");
});
