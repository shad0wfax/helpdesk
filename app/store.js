// by default, persist application data to localStorage change this file
// to use the RESTAdapter or your own adapter.

module.exports = DS.Store.extend({
  revision: 11,
  adapter: DS.LSAdapter.create()
}).create();

