/*
 * grunt-provecss
 * https://github.com/gasolin/grunt-provecss
 *
 * Copyright (c) 2014 Fred Lin(gasolin)
 * Licensed under the MIT license.
 */

'use strict';
var provecss = require('provecss');
module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('provecss', 'grunt plugin for provecss', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
//      punctuation: '.',
//      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var string =  grunt.file.read(filepath);
        string = provecss(string, options);
        return string;
      });//.join(grunt.util.normalizelf(options.separator));

      // Handle options.
//      src += options.punctuation;
//      src = processor(src, options);

      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
