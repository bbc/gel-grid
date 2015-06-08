# GEL Layout

GEL proposes a 12 and 24 column grid with margin and gutter dimensions adjusted according to breakpoints optimised for feature phones, smart phones, tablet devices and desktops.

The GEL Layout component provides a considered and flexible layout system.

## Installation

We recommend that you use a package manager ([Bower](http://bower.io/) or [NPM](https://www.npmjs.org/)) to install this component. Using a package manager will make it easier for you to handle any updates made to this component, it will also automatically manage the dependancies of this component for you.

### Install using Bower

```Shell
$ bower install --save https://github.com/bbc-gel/gel-layout.git
```

Once installed, use a Sass `@import` to bring the component into your project:

```Sass
@import 'bower_components/gel-layout/layout';
```

### Install using NPM

[Coming Soon]

### Install manually

You can install this component manually by downloading the content of this Git repo into your project and use a Sass `@import` to include it in your project.

> **Note:** you will manually need to manage the depedencies below, without these this component will fail to compile.

## Dependencies

In order to use the GEL Layout component you will need the following component available:

- [GEL Settings](https://github.com/bbc-gel/gel-settings)
- [GEL Tools](https://github.com/bbc-gel/gel-tools)

> **Note:** This component requires [Sass 3.3.x](http://blog.sass-lang.com/posts/184094-sass-33-is-released) to make use of [Sass Maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) and various other features.

## Usage



### `inline-block` and Whitespace

Of the various different ways to implement a grid/layout system we've opted to use the `display: inline-block;` technique. This gives us a massive amount of flexibility compared to a more traditional approach such as using `floats` and good cross browser support compared to more modern techinques like `flexbox`.

The use of `inline-block` means we need to overcome the whitespace which is added between elements. This whitespace is added as elements with `inline-block` are essentially treated as text elements and spaces in your markup are treated in the same way a space between two words would be displayed.

There are several great articles offering techinques which can be used to remove this space:

- [Fighting the Space Between Inline Block Elements](http://css-tricks.com/fighting-the-space-between-inline-block-elements/)
- [Remove Whitespace Between Inline-Block Elements](http://davidwalsh.name/remove-whitespace-inline-block)

[BBC Sport](https://github.com/bbc-sport) have conducted large amounts of research into all the different CSS only techinques to collapse this whitepace between items and have been unable to find one approach which works consistantly across all browsers and devices.

The only 100% guranteed, cross-browser approach to removing this unwanted space is to phyically collapse the space in the markup:

```html
<div class="gel-layout">
    <div class="gel-layout__item">

    </div><div class="gel-layout__item">

    </div>
</div>
```

or by using HTML comments:

```html
<div class="gel-layout">
    <div class="gel-layout__item">

    </div><!--
 --><div class="gel-layout__item">

    </div>
</div>
```

If this recommended approach is not suitable for your implementation then the most robust CSS solution we've found is from [Yahoo YUI library](https://github.com/yui/yui3/blob/master/src/cssgrids/css/cssgrids-responsive.css#L10) and involves using the `letter-spacing` property to collapse the unwanted whitespace. The only issue we've found with this techinque is if there are an odd number of spaces between HTML elements, iOS devices will render this odd space, thus potentially breaking the layout.

This component includes an optional, bundled CSS solution which can be enabled by defining the `$gel-layout-enable--whitespace-fix` as `true`.

## Options

The following options can be defined before the layout partials are included to customise the functionaility and output. By default all feature options are all set to `false` allowing you to enable only the features you'd like available. This allows you to have some level of control over the size of the code output.

- `$gel-layout-namespace` - you can change the default namespace applied to all typography classes by defining it here. Alternatively, you can remove the prefix by passing through a blank string
- `$gel-layout-max-width` - adjust the maximum width of the grid container
- `$gel-layout-enable--box-sizing` - this layout system relies on the use of `border-box` as box-sizing model. If you've **not** applied this [globally to your project](http://www.paulirish.com/2012/box-sizing-border-box-ftw/), then setting this option to `true` will enable `border-box` just to the layout items
- `$gel-layout-enable--whitespace-fix` - implement a CSS solution to collapse the unwanted whitespace between `layout__item`'s. More details on this can be [found above]().
- `$gel-layout-enable--flush` - Enable layouts with no gutters
- `$gel-layout-enable--rev` - Enable reverse the rendered order of layout items, e.g. items 1, 2, 3, 4 in your markup will display in order 4, 3, 2, 1 on your page
- `$gel-layout-enable--middle` - Enable option to align layout items to the vertical centers of each other
- `$gel-layout-enable--bottom` - Enable option to align layout items to the vertical bottoms of each other
- `$gel-layout-enable--right` - Enable option to make the layout items fill up from the right hand side
- `$gel-layout-enable--center` - Enable option to build the layout items from the center outward
- `$gel-layout-enable--auto` - Enable option to cause layout items to take up a non-explicit amount of width

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
