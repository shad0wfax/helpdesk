DashboardInit = require('../init/dashboard_init');

Helpdesk.DashboardView = Ember.View.extend({
	didInsertElement: function() {
		//alert('did insert DashboardView ');
		DashboardInit.charts();
	}
});