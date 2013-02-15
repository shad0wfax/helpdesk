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
          'vendor/scripts/acme/jquery-1.9.1.min.js',
          'vendor/scripts/acme/jquery-migrate-1.0.0.min.js',
          'vendor/scripts/handlebars-1.0.rc.2.js',
          'vendor/scripts/ember-latest.js',
          'vendor/scripts/ember-data-latest.js'
        ]

    stylesheets:
      defaultExtension: 'css'
      joinTo: 'stylesheets/app.css'
      order:
        before: [
          'vendor/styles/acme/bootstrap.css',
          'vendor/styles/acme/bootstrap-responsive.css',
          'vendor/styles/acme/jquery-ui-1.8.21.custom.css',
          'vendor/styles/acme/fullcalendar.css',
          'vendor/styles/acme/chosen.css',
          'vendor/styles/acme/uniform.default.css',
          'vendor/styles/acme/jquery.cleditor.css',
          'vendor/styles/acme/jquery.noty.css',
          'vendor/styles/acme/noty_theme_default.css',
          'vendor/styles/acme/elfinder.min.css',
          'vendor/styles/acme/elfinder.theme.css',
          'vendor/styles/acme/jquery.iphone.toggle.css',
          'vendor/styles/acme/uploadify.css',
          'vendor/styles/acme/jquery.gritter.css',
          'vendor/styles/acme/font-awesome.css',
          'vendor/styles/acme/font-awesome-ie7.css',
          'vendor/styles/acme/glyphicons.css',
          'vendor/styles/acme/halflings.css'
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

