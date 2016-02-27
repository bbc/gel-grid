<h1 align="center">GEL Grid</h1>
<p align="center">
  <a href="https://travis-ci.org/bbc/gel-grid" target="_blank"><img src="https://travis-ci.org/bbc/gel-grid.svg?branch=master"></a>
</p>
<p align="center">
    A flexible code implementation of the GEL Grid.<br />
    Forms part of the <a href="https://github.com/bbc/gel-foundations" target="_blank"><b>GEL Foundations</b></a>
</p>

## What is this?

An implementation of the [GEL Grid Guidelines](http://www.bbc.co.uk/gel/guidelines/grid).
The Grid provides a way of creating flexible and unique layouts whilst also maintaining consistent margins, gutters and containing widths across the BBC, online.

The GEL Grid has been established to work on all devices and is independent of device size and resolution.

It can used in two forms, using a Sass mixin:

```sass
.my-component {
    @include gel-layout;
}

.my-component__item {
    @include gel-layout-item();
    @include gel-columns(1/2);
}
```

Or by simply adding the relevant classes to your markup:

```html
<div class="gel-layout">
    <div class="gel-layout__item gel-1/2"></div>
    <div class="gel-layout__item gel-1/2"></div>
</div>
```

## Installation

The easiest way to get started with the GEL Grid component is to use the compiled version of the grid included within this repository.

If you're a more advanced user and want to integrate the GEL Grid component within your codebase, use one of the following options:

### Install using Bower

```bash
$ bower install --save gel-grid
```

```sass
// your-app/main.scss
@import 'bower_components/gel-sass-tools/sass-tools';
@import 'bower_components/sass-mq/mq';
@import 'bower_components/gel-grid/grid';
```

### Install using NPM

```bash
$ npm install --save gel-grid
```

```sass
// your-app/main.scss
@import 'node_modules/gel-sass-tools/sass-tools';
@import 'node_modules/sass-mq/mq';
@import 'node_modules/gel-grid/grid';
```

### Install manually

You can install this component manually by downloading the content of this Git repo into your project and use a Sass @import to include it in your project.

> **Note:** you will manually need to manage the dependencies below, without these this component will fail to compile.

## Dependencies

In order to use the component you will need the following components available:

- [GEL Sass Tools](https://github.com/bbc/gel-sass-tools)
- [Sass MQ](https://github.com/sass-mq/sass-mq)

## Usage

A collection of grid utility classes can be output by defining `$gel-grid-enable--markup-output: true;` before you `@import` the main grid partial.

**Example:**

```scss
$gel-grid-enable--markup-output: true;

@import "gel-grid/grid";
```

This will allow you to create grids using specific markup within your page. With the grid markup enabled, its possible to create grids like so:

```html
<div class="gel-wrap">
    <div class="gel-layout">
        <div class="gel-layout__item gel-1/2 gel-1/4@m"></div>
        <div class="gel-layout__item gel-1/2 gel-1/4@m"></div>
        <div class="gel-layout__item gel-1/2 gel-1/4@m"></div>
        <div class="gel-layout__item gel-1/2 gel-1/4@m"></div>
    </div>
</div>
```

This would create a grid with item being 50% wide. At the medium GEL breakpoint (600px), each item changes to 25%.

**Core Grid Classes**

- `gel-wrap` - the outer grid wrapper, defines the maximum width of the grid and page margins
- `gel-layout` - a grid row
- `gel-layout__item` - an item within the grid, applies gutters between items. Width can be controlled using width classes

**Modifier Classes**

- `gel-layout--flush` - removes gutters between items
- `gel-layout--rev` - reversed order of layout items, e.g. items 1, 2, 3, 4 in your markup will display in order 4, 3, 2, 1 on your page
- `gel-layout--middle` - align layout items to the vertical centers of each other
- `gel-layout--bottom` - align layout items to the vertical bottoms of each other
- `gel-layout--right` - make the layout items fill up from the right hand side
- `gel-layout--center` - make the layout items fill up from the center outward
- `gel-layout--auto` - cause layout items to take up a non-explicit amount of width

### Widths
[TO DO]

### Sass Mixins
By default the GEL grid component exposes a Sass Mixin which can be called within your Sass.

**Example**

```scss
.my-component {
    @include gel-layout;
}

.my-component__item {
    @include gel-layout-item();
    @include gel-columns(1/2);

    @if $enhanced {
        @include mq($from: gel-bp-m) {
            @include gel-columns(1/4);
        }
    }
}
```

### 1280px Grid

Ensure the scss configuration option `$gel-grid-enable--1280-breakpoint` is set to true. You can also optionally choose to only enable 1280 styling in the presence of a class specified by `$gel-grid-1280-toggle-class`. i.e. [this can be set up to only use 1280px styling when the `b-pw-1280` class is present](http://www.bbc.co.uk/frameworks/orb/css).

### Box Sizing
[TO DO]

### `inline-block` & white-space
[TO DO]

## Configuration

The following configurable options are available:

### General Configuration

- `$gel-grid-namespace: 'gel-';` - the default namespace applied to all grid classes
- `$gel-grid-breakpoint-namespace: 'gel-bp-';` -
- `$gel-grid-1280-toggle-class: null` -
- `$gel-grid-breakpoints` -
- `$gel-grid-breakpoints--1280` -
- `$gel-grid-default-columns` -
- `$gel-grid-columns` -
- `` -

### Output Configuration

- `$gel-grid-enable--markup-output: false;` - output a collection of classes
- `$gel-grid-enable--1280-breakpoint: true;` -
- `$gel-grid-enable--box-sizing: false;` -
- `$gel-grid-enable--whitespace-fix: false;` -

## Who is using this?

The following teams are currently using this component: GEL, News, Sport, Live, Search, BBC Food, Taster & Academy

If your team is using this component, let us know and we'll add you to the list.

## Credits

- [Shaun Bent](https://twitter.com/shaunbent)
- [Al Jones](https://twitter.com/Itsaljones)

## License

> The MIT License (MIT)
>
> Copyright 2016 British Broadcasting Corporation
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
