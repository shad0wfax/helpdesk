fs      = require 'fs'
sysPath = require 'path'

# See docs at http://brunch.readthedocs.org/en/latest/config.html.

exports.config = 

  files: 
    
    javascripts: 
      defaultExtension: 'js',
      joinTo: 
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/

      order: 
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/acme/jquery-1.8.3.min.js',
          'vendor/scripts/handlebars-1.0.rc.2.js',
          'vendor/scripts/ember-latest.js',
          'vendor/scripts/ember-data-latest.js',
          'vendor/scripts/acme/jquery-ui-1.8.21.custom.min.js',
          'vendor/scripts/acme/modernizr.js',
          'vendor/scripts/bootstrap.js',
          'vendor/scripts/acme/jquery.cookie.js',
          'vendor/scripts/acme/fullcalendar.min.js',
          'vendor/scripts/acme/jquery.dataTables.min.js',
          'vendor/scripts/acme/excanvas.js',
          'vendor/scripts/acme/jquery.flot.js',
          'vendor/scripts/acme/jquery.flot.pie.js',
          'vendor/scripts/acme/jquery.flot.resize.min.js',
          'vendor/scripts/acme/jquery.flot.stack.js',
          'vendor/scripts/acme/jquery.chosen.min.js',
          'vendor/scripts/acme/jquery.uniform.min.js',
          'vendor/scripts/acme/jquery.cleditor.min.js',
          'vendor/scripts/acme/jquery.noty.js',
          'vendor/scripts/acme/jquery.elfinder.min.js',
          'vendor/scripts/acme/jquery.raty.min.js',
          'vendor/scripts/acme/jquery.iphone.toggle.js',
          'vendor/scripts/acme/jquery.uploadify-3.1.min.js',
          'vendor/scripts/acme/jquery.gritter.min.js',
          'vendor/scripts/acme/jquery.imagesloaded.js',
          'vendor/scripts/acme/jquery.masonry.min.js',
          'vendor/scripts/acme/jquery.knob.modified.js',
          'vendor/scripts/acme/jquery.sparkline.min.js',
          'vendor/scripts/acme/counter.js',
          'vendor/scripts/acme/retina.js'
        ]

    stylesheets:
      defaultExtension: 'css'
      joinTo: 'stylesheets/app.css'
      order:
        before: [
          'vendor/styles/acme/bootstrap.css',
          'vendor/styles/acme/bootstrap-responsive.css',
          'vendor/styles/acme/chosen.css',
          'vendor/styles/acme/elfinder.min.css',
          'vendor/styles/acme/elfinder.theme.css',
          'vendor/styles/acme/font-awesome-ie7.css',
          'vendor/styles/acme/font-awesome.css',
          'vendor/styles/acme/fullcalendar.css',
          'vendor/styles/acme/glyphicons.css',
          'vendor/styles/acme/halflings.css',
          'vendor/styles/acme/ie.css',
          'vendor/styles/acme/ie9.css',
          'vendor/styles/acme/jquery-ui-1.8.21.custom.css',
          'vendor/styles/acme/jquery.cleditor.css',
          'vendor/styles/acme/jquery.gritter.css',
          'vendor/styles/acme/jquery.iphone.toggle.css',
          'vendor/styles/acme/jquery.noty.css',
          'vendor/styles/acme/noty_theme_default.css',
          'vendor/styles/acme/style-responsive.css',
          'vendor/styles/acme/style.css',
          'vendor/styles/acme/uniform.default.css',
          'vendor/styles/acme/uploadify.css'
        ]

    templates:
      precompile: true
      root: 'templates'
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/

  modules:
    addSourceURLs: true

  # allow _ prefixed templates so partials work
  conventions:
    ignored: (path) ->
      startsWith = (string, substring) ->
        string.indexOf(substring, 0) is 0
      sep = sysPath.sep
      if path.indexOf("app#{sep}templates#{sep}") is 0
        false
      else
        startsWith sysPath.basename(path), '_'

  server:
    port: 3333
    base: '/'
    run: no

