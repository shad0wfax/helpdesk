
window.App = require('app');

//////////////////////////////////
// Templates
//////////////////////////////////

require('templates/application');
//require('templates/index');
require('templates/tables');

//////////////////////////////////
// Models
//////////////////////////////////



/////////////////////////////////
// Controllers
/////////////////////////////////



/////////////////////////////////
// Views
/////////////////////////////////



/////////////////////////////////
// Routes
/////////////////////////////////
require('routes/IndexRoute')


/////////////////////////////////
// Store
/////////////////////////////////

App.Store = DS.Store.extend({
  revision: 11
});

/////////////////////////////////
// Router
/////////////////////////////////
require('router')



App.initialize();