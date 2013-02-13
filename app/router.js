// Helpdesk.Router.map(function() {
//   this.route('index', { path: '/'});
// });

Helpdesk.Router.map(function() {
	this.resource('dashboard', {paths: "/dashboard"});
	
	this.resource('tickets', function() {
		this.resource('ticket', {path: ':ticket_category' });
	});

});
