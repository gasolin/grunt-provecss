# grunt-provecss
[![Build Status](https://travis-ci.org/gasolin/grunt-provecss.svg)](https://travis-ci.org/gasolin/grunt-provecss) [![NPM version](https://badge.fury.io/js/grunt-provecss.svg)](http://badge.fury.io/js/grunt-provecss) [![Dependency Status](https://david-dm.org/gasolin/grunt-provecss.svg)](https://david-dm.org/gasolin/grunt-provecss)

> grunt plugin for [provecss](https://github.com/gasolin/provecss)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-provecss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-provecss');
```

## The "provecss" task

### Overview
In your project's Gruntfile, add a section named `provecss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  provecss: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
      files: { 'dest': 'src'}
    },
  },
})
```

### Options

#### options.files
Type: `Dictionary`

A key/value pair that is used to define the source file and generated file destination.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  provecss: {
    options: {},
    files: {
      'dest/calc.out.css': 'src/calc.css'
    },
  },
})
```

#### Custom Options
In this example, You can pass any provecss options in `options` section.

```js
grunt.initConfig({
  provecss: {
    options: {
      vars: true
    },
    files: {
      'dest/vars.out.css': 'src/vars.css'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.3.0 first release

## License
Copyright (c) 2014 Fred Lin(gasolin). Licensed under the MIT license.
