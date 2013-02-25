Helpdesk.ApplicationView = Ember.View.extend({

    /* This is to keep the navigation on the left_nav active */
    currentPathDidChange: function() {
        Ember.run.next( this, function() {
            // NPE if not #? - get defensive
            var after_hash = location.href.split("#")[1];
            var context = after_hash.split("/")[1];

            this.$("#sidebar-left ul.nav li a").removeClass('active');

            /* loop through sidebar-left links and choose the one with the current context */
            $("#sidebar-left ul.nav li a").each(function(){
                var link = $(this).prop("href").split("#")[1].split("/")[1];

                if(link == context) {
                    $(this).addClass("active");
                }
            });
        });
    }.observes('controller.currentPath')
});
