window.Helpdesk = require('app');

//////////////////////////////////
// Templates
//////////////////////////////////
require('templates/application');
require('templates/nav/_navbar');
require('templates/nav/_footer');
require('templates/nav/_leftnav');
require('templates/dashboard');
require('templates/tickets');
require('templates/ticket_frags/_tickets_side_panel');
require('templates/ticket_frags/tickets_list');
require('templates/ticket_frags/ticket_details');
//require('templates/ticket');

//////////////////////////////////
// Models
//////////////////////////////////
require('models/ticket');


/////////////////////////////////
// Store
/////////////////////////////////
// Helpdesk.Store = DS.Store.extend({
//   revision: 11
// });
require('models/store/store');


/////////////////////////////////
// Controllers
/////////////////////////////////
require('controllers/tickets_controller');
require('controllers/ticket_controller');


/////////////////////////////////
// Views
/////////////////////////////////
require('views/dashboard_view');
require('views/tickets_highlights_view');
require('views/tickets_ticket_view');
require('views/application_view');

/////////////////////////////////
// Routes
/////////////////////////////////
require('routes/index_route');
require('routes/tickets_highlights_route');
require('routes/tickets_ticket_route');


/////////////////////////////////
// Init
/////////////////////////////////
require('init/dashboard_init');


/////////////////////////////////
// Router
/////////////////////////////////
require('router');



Helpdesk.initialize();
