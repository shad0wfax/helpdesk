// by default, persist application data to localStorage change this file
// to use the RESTAdapter or your own adapter.
Helpdesk.Store = DS.Store.extend({
    revision: 11,
    //adapter: DS.LSAdapter.create()
    adapter: "DS.FixtureAdapter"
});

// Model specific adapters

