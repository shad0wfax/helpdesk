// App = require('app')
Testing = require('testing');

Helpdesk.DashboardView = Ember.View.extend({
	didInsertElement: function() {
		//alert('did insert - ' + acme);
		//charts();
		Testing.callme(Testing.sayhello());

		// var bar;
		// for (bar in acme)
		// {
		//     console.log("Foo has property " + bar);
		// }


	}
});