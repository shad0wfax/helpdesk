// Helpdesk.Router.map(function() {
//   this.route('index', { path: '/'});
// });

Helpdesk.Router.map(function() {
	this.resource('dashboard', {paths: "/dashboard"});
	
	this.resource('tickets', function() {
		this.route('ticket', {path: ':ticket_category' });
	});
    this.resource('configure', {paths: "/configure"});
    this.resource('admin', {paths: "/admin"});
});
