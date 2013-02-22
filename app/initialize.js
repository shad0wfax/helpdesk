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

//////////////////////////////////
// Models
//////////////////////////////////
require('models/Ticket');


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
require('controllers/TicketsController');


/////////////////////////////////
// Views
/////////////////////////////////
require('views/DashboardView');



/////////////////////////////////
// Routes
/////////////////////////////////
require('routes/IndexRoute');
require('routes/TicketsHighlightsRoute');


/////////////////////////////////
// Init
/////////////////////////////////
require('init/DashboardInit');


/////////////////////////////////
// Router
/////////////////////////////////
require('router');



Helpdesk.initialize();
