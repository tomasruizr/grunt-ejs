/*
 * grunt-ejs
 * Modified By Tomás Ruiz to suit the single file generation.
 * 
 * https://github.com/shama/grunt-ejs
 *
 * Copyright (c) 2014 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';
  var ejs = require('ejs');
  grunt.registerMultiTask('ejs', 'compile ejs templates', function() {
    var options = this.options();
    grunt.verbose.writeflags(options, 'Options');
    this.files.forEach(function(file) {
      var out = file.src.map(grunt.file.read).join('');
      //*******************************************
      // Added by Tomás Ruiz to support single file generation.
      //*******************************************
      var destFile = options.singleFile ? options.singleFile : file.dest;
      options.filename = file.src[0];
      grunt.file.write(destFile, ejs.render(out, options));
      grunt.log.ok('Wrote ' + destFile);
    })
  });
};
