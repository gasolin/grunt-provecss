/*
 * grunt-provecss
 * https://github.com/gasolin/grunt-provecss
 *
 * Copyright (c) 2014 Fred Lin(gasolin)
 * Licensed under the MIT license.
 */

'use strict';
var eachAsync = require('each-async');
var processor = require('provecss');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('provecss', 'grunt plugin for provecss', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    eachAsync(this.files, function (item, index, done) {
      var string = grunt.file.read(item.src);
      string = processor(string, options);
      grunt.file.write(item.dest, string);
      done();
    });
  });

};
