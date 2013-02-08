// App.Router.map(function() {
//   this.route('index', { path: '/'});
// });

App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', {path: ':table_id' });
  });    // /#/tables
});
