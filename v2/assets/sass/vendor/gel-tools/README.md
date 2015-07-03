# GEL Tools

A collection of useful Sass functions and mixins are **required** by various components within the GEL codebase.

The following tools are currently included:

- **Math** - a collection of simple math functions which can be used when working with the `$gel-spacing-unit`
- **REM** - a tool to convert `px` values to `rem` units. The conversion logic is based on [Guss REM](https://github.com/guardian/guss-rem), with additional options added to give more control over the returned output.

## Installation

We recommend that you use a package manager ([Bower](http://bower.io/) or [NPM](https://www.npmjs.org/)) to install this component. Using a package manager will make it easier for you to handle any updates made to this component, it will also automatically manage the dependancies of this component for you.

### Install using Bower

```Shell
$ bower install --save https://github.com/bbc-gel/gel-tools.git
```

Once installed, use a Sass `@import` to bring the component into your project:

```Sass
@import 'bower_components/gel-tools/tools.math';
@import 'bower_components/gel-tools/tools.rem';
```

### Install using NPM

[Coming Soon]

### Install manually

You can install this component manually by downloading the content of this Git repo into your project and use a Sass `@import` to include it in your project.

> **Note:** you will manually need to manage the depedencies below, without these this component will fail to compile.

## Dependencies

In order to use the GEL Tools component you will need the following component available:

- [GEL Settings](https://github.com/bbc-gel/gel-settings)

> **Note:** This component requires [Sass 3.3.x](http://blog.sass-lang.com/posts/184094-sass-33-is-released) to make use of [Sass Maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) and various other features.

## Usage

Usage of the included tools is as follows:

### Math

The following `math` functions are included:

- `quarter($value)`
- `havle($value)`
- `double($value)`
- `quadruple($value)`

These functions can be used inline with any numberical CSS rule. E.g:

```Sass
.some-class {
    margin-bottom: havle($gel-spacing-unit);
    padding-left: double($gel-spacing-unit);
    padding-right: double($gel-spacing-unit);
}
```

or functions can be nested within other Sass features such as mixins:

```Sass
.some-class {
    @include rem('margin-bottom', havle($gel-spacing-unit));
    @include rem('padding-left', double($gel-spacing-unit));
    @include rem('padding-right', double($gel-spacing-unit))s;
}
```

### REM

The `rem` tool can be used in two ways. Either by directly calling the `rem($value)` function, which will convert the supplied value and return a `rem` unit. E.g:

```Sass
.some-class {
    margin-bottom: rem($gel-spacing-unit);
}
```

> Beware that [rem](http://caniuse.com/#feat=rem) units are not universial supported. Currently IE8 and below and Opera Mobile do not support `rem` so require a `px` fallback.

You can also use the `@include rem($value);` mixin, which by default returns a `px` fallback to allow support for older browsers which don't support `rem` units. E.g:

**Sass**
```Sass
.some-class {
    @include rem('margin-bottom', 16px);
}
```

**CSS**
```CSS
.some-class {
    margin-bottom: 16px;
    margin-bottom: 1rem;
}
```

## Options

The following options can be defined before the tools partials are included to customise the functionaility and output. By default the following options are all set to `true`:

- `$gel-tools-rem-enable--function` - enable/disable the rem conversion, if this option is disabled only `px` values will be returned
- `$gel-tools-rem-enable--mixin` - disable the mixin if you only want to output the `px`, this can be useful for IE8 stylesheets who don't need `rem` values
- `$tel-tools-rem-enable--fallback` - disable the automatic generation of a `px` fallback when the mixin in called, use this open if you want to remove all `px` values from your stylesheets

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