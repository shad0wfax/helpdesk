window.Helpdesk = require('app');

//////////////////////////////////
// Templates
//////////////////////////////////

require('templates/application');
require('templates/dashboard');

//////////////////////////////////
// Models
//////////////////////////////////



/////////////////////////////////
// Controllers
/////////////////////////////////



/////////////////////////////////
// Views
/////////////////////////////////
require('views/DashboardView');



/////////////////////////////////
// Routes
/////////////////////////////////
require('routes/IndexRoute');


/////////////////////////////////
// Store
/////////////////////////////////

Helpdesk.Store = DS.Store.extend({
  revision: 11
});

/////////////////////////////////
// Router
/////////////////////////////////
require('router');



Helpdesk.initialize();
