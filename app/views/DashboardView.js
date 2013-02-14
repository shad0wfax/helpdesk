DashboardInit = require('../init/DashboardInit');

Helpdesk.DashboardView = Ember.View.extend({
	didInsertElement: function() {
		alert('did insert DashboardView ');
		DashboardInit.charts();
	}
});