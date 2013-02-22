// Helpdesk.Router.map(function() {
//   this.route('index', { path: '/'});
// });

Helpdesk.Router.map(function() {
	this.resource('dashboard', {paths: "/dashboard"});
	
	this.resource('tickets', {path: '/tickets' },  function() {
//		this.route('highlights', { path: '/highlights' }, function() {
//            this.route('ticketinfo', { path: '/highlights/:id' } );
//        });

        this.route('highlights');
        this.route('photos');
        this.route('audios');
        this.route('videos');
        this.route('text');
        this.route('emails');
        this.route('all');
        this.route('open');
        this.route('pending');
        this.route('hold');
        this.route('closed');

//        this.route('tickets', {path: '/tickets/:id'});

    });

    this.resource('configure', {paths: "/configure"});
    this.resource('admin', {paths: "/admin"});
});
