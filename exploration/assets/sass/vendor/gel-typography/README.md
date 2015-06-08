# GEL Responsive Typography

The GEL Responsive Typography scale has been established to work on all devices and is independent of device size and resolution.

The typographic scale has been optimised based on the size of the viewport and the input method being used. We take a 'touch first' approach to typography, adjustments are then made if a primary input other than touch has been detected.

Background information relating to the [GEL Responsive Typography Guidelines](https://github.com/bbc-sport/gel-typography/wiki/GEL-Typography-Guidelines) can be found within the wiki pages and more details on the [BBC GEL website](http://www.bbc.co.uk/gel).

## Installation

We recommend that you use a package manager ([Bower](http://bower.io/) or [NPM](https://www.npmjs.org/)) to install this component. Using a package manager will make it easier for you to handle any updates made to this component, it will also automatically manage the dependancies of this component for you.

### Install using Bower

```Shell
$ bower install --save https://github.com/bbc-gel/gel-typography.git
```

Once installed, use a Sass `@import` to bring the component into your project:

```Sass
@import 'bower_components/gel-typography/typography';
```

### Install using NPM

[Coming Soon]

### Install manually

You can install this component manually by downloading the content of this Git repo into your project and use a Sass `@import` to include it in your project.

> **Note:** you will manually need to manage the depedencies below, without these this component will fail to compile.

## Dependencies

In order to use the GEL Typography component you will need the following component available:

- [GEL Settings](https://github.com/bbc-gel/gel-settings)
- [GEL Tools](https://github.com/bbc-gel/gel-tools)

> **Note:** This component requires [Sass 3.3.x](http://blog.sass-lang.com/posts/184094-sass-33-is-released) to make use of [Sass Maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) and various other features.

## Usage

The GEL Typography component is designed to be flexible so that it is able to meet the needs of your product whilst adhering GEL Responsive Typography Guidelines.

Configuration and customisation is controlled by declaring specific variables with your custom values before including the GEL Typography Sass files. When compiling the Sass your custom variables will be used and override any of the default values.

**Example:**

```scss
$gel-type-touch-class: 'feature-no-touch';
$gel-type-enable--font-family: false;

@import "gel-typography/typography";
```

The following configurable options are available:

### General Configuration

- `$gel-type-namespace: 'gel-';` - you can change the default namespace applied to all typography classes by defining it here. Alternatively, you can remove the prefix by passing through a blank string.

> **Note:** In an attempt to establish a standard across the BBC we recommend that you use the default prefix of `gel-`. This will allow components to be shared across products and consistently rely on the same set of typography rules. Without the standard prefix you may need to include the same set of style rules twice.

- `$gel-type-touch-class: 'no-touch';` - as detailed previously the GEL Responsive Typography Guidelines adopts a 'touch-first' approach. You can specific the exact class name you're using for your touch detection. **Note:** as we're taking a 'touch-first' approach this class is applied when a non-touch interface is detected.

#### Output Configuration

- `$gel-type-enable--markup-output: true;` - Disabling this option will allow you to control the output of the typography style rules. You will need to directly access the `@include gel-output-type-group({{group-name}});` mixin yourself within your codebase
- `$gel-type-enable--font-family: false;` - Barlesque will set the correct font-family on the <body> tag but if you're working on a project without Barlesque you might want to enable this flag to have the correct font-family defined for you.
- `$gel-type-enable--base-elements: false;` - Enabling this flag will map the GEL Typography classes to the relevant HTML elements.

#### Custom Font Configuration

If you're using another font-face other than Arial and need to make adjustments to any of the type settings you can do this by passing in a custom `$gel-type-settings` [map](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps).

*For example:* BBC News support many languages, some of which do not use latin based character sets which require custom scripts loading in. It is often the case that these custom fonts will require bespoke font-sizes or line-heights.

If you need to supply custom type settings, copy the entire `$gel-type-settings` map from the `_settings.scss` partial and include it before the `_typography.scss` partial is imported. You can then update this map with your custom configuration. For example, the configuration for Burmese may look like:

```scss
$gel-type-settings: (
    'trafalgar': (
        'group-a': (
          'font-size': 22px,
          'line-height': 30px,
          '--bold': (
              'font-weight': bold,
              'letter-spacing': -1px
          )
        ),
        'group-b': (
          'font-size': 26px,
          'line-height': 36px
        ),
        'group-c': (
          'font-size': 38px,
          'line-height': 50px
        ),
        'group-d': (
          'font-size': 32px,
          'line-height': 32px
        )
    ),
    'double-pica': (
       ...
    )
);
```

> **Note:** You're not limited to just `font-size` and `line-height` you can pass any standard CSS property and value. If enabled `px` values will automatically be converted into `rem` units.

#### Custom Typography

If you need to vary the type across breakpoints you can use the following technique (class equivalents not available yet):

```
.custom-type {
    @extend %gel-trafalgar;
    @extend %gel-group-c-pica;
    .no-touch & {
        @extend %gel-group-d-pica;
    }
}
```

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
