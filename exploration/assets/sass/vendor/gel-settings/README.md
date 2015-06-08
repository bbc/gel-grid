# GEL Settings

The GEL Settings component contains a selection of common global variables that are **required** by most (if not all) GEL components.

GEL Settings are broken down into two parts:

- **Globals** - a collection of variables that provide common configuration
- **MQ Config** - basic configuration of the Sass MQ component, the values are taken from the `Globals` partial

## Installation

We recommend that you use a package manager ([Bower](http://bower.io/) or [NPM](https://www.npmjs.org/)) to install this component. Using a package manager will make it easier for you to handle any updates made to this component, it will also automatically manage the dependancies of this component for you.

### Install using Bower

```Shell
$ bower install --save https://github.com/bbc-gel/gel-settings.git
```

Once installed, use a Sass `@import` to bring the component into your project:

```Sass
@import 'bower_components/gel-settings/globals';
```

### Install using NPM

[Coming Soon]

### Install manually

You can install this component manually by downloading the content of this Git repo into your project and use a Sass `@import` to include it in your project.

> **Note:** you will manually need to manage the depedencies below, without these this component will fail to compile.

## Dependencies

In order to use the GEL Settings component you will need the following component available:

- [Sass MQ](https://github.com/guardian/sass-mq)

> **Note:** This component requires [Sass 3.3.x](http://blog.sass-lang.com/posts/184094-sass-33-is-released) to make use of [Sass Maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) and various other features.

## Usage

There are no usable functions within the GEL Settings component. However, it is possible to tweak and amend the settings to match your products requirements.

Beware that changing some settings may cause the visual style of your site to break away from the styling guidelines defined by GEL.

The variables defined within GEL Settings should not be modified or adjusted directly; you should predefine the variables in your own project, to overide the default values. E.g:

```sass
$gel-namespace: '';
$gel-breakpoint-names: (compact, small, medium, wide);
$gel-breakpoint-static: wide;

@import 'bower_components/gel-settings/settings.globals';
@import 'bower_components/gel-settings/settings.mq-config';
```

### Accessing GEL Breakpoints

Their are occactions where you might need to access the GEL breakpoints in your own codebase. The settings component makes a Sass Map of breakpoints available to you. This can accessed by referencing `$gel-breakpoints`. You may want to use this in a loop, e.g:

```sass
@each $breakpoint, $value in $gel-breakpoints {
    {{YOUR CODE}}
}
```

## Options

The following options are made available for you to modify.

> **Note** Any modifications made will apply globally

- `$gel-namespace` - by default all GEL components are namespaced with `gel-`, by changing the value you can effect the default namespace applied to all GEL components. It is possible to control the namespacing of individual GEL components
- `$gel-spacing-unit` - GEL spacing is based on an 8px baseline, where possible this baseline and multiples of shuld act as your default spacing unit to ensure consistant spacing across products
- `$gel-base-font-size` - the base font size you want to work with across your project, this is currently only used by the GEL tools

- `$gel-breakpoint-names` - a Sass list containing the names of the core GEL breakpoints
- `$gel-breakpoint-sizes` - a Sass list containing the sizes of the core GEL breakpoints, this maps to the names defined previously
- `$gel-breakpoint-static` - the name of the breakpoint you which to output the fixed styles for, this is used to generate a media-query free stylesheet for IE8

## License

> The MIT License (MIT)
>
> Copyright 2014 British Broadcasting Corporation
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
