<h1 align="center">GEL Grid</h1>
<p align="center">
    A flexible code implementation of the GEL Grid.<br />
    Forms part of the <a href="https://github.com/bbc/gel-foundations" target="_blank"><b>GEL Foundations</b></a>
</p>

## What is this?

An implementation of the [GEL Grid Guidelines](http://www.bbc.co.uk/gel/guidelines/grid).
The Grid provides a way of creating flexible and unique layouts whilst also maintaining consistent margins, gutters and containing widths across the BBC, online.

The GEL Grid has been established to work on all devices and is independent of device size and resolution.

It can used in two forms, by simply adding the relevant classes to your markup:

```html
<div class="gel-layout">
    <div class="gel-layout__item gel-1/2"></div>
    <div class="gel-layout__item gel-1/2"></div>
</div>
```

Or using a Sass mixin:

```sass
.my-component {
    @include gel-layout;
}

.my-component__item {
    @include gel-layout-item;
    @include gel-columns(1/2);
}
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

This would create a grid with each item being 50% wide. At the medium GEL breakpoint (600px), the width of each item changes to 25%.

**Core Grid Classes**

- `gel-wrap` - the outer grid wrapper, defines the maximum width of the grid and applies page margins
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

Widths can be applied to grid items using a collection of utility classes which are automatically generated when the grid markup is enabled. The utility classes allow widths to be changed at different breakpoints.

The width utility classes are entirely fraction based allowing you to size grid elements proportionally. By default the following fractional groups are output: `whole`, `halves`, `thirds`, `quarters`, `fifths`, `eighths`, `tenths`, `twelfths` and `twenty-fourths`.

The class structure is as follows:

- `.gel-1/1` - 100%
- `.gel-1/2` - 50%
- `.gel-2/3` - 66.666666667%
- `.gel-10/12` - 83.333333333%

In order to reduce page weight we do not output whole fractions for each group as this can be simply normalised to one whole (`.gel-1/1`).

#### Breakpoints

It is possible to apply width classes at specific breakpoints by applying a breakpoint specific suffix to the end of the class. That might look something like this:

```html
<div class="gel-layout">
    <div class="gel-layout__item gel-1/1 gel-1/2@m gel-1/4@l"></div>
</div>
```

Here the item would be 100% wide by default, then 50% wide from 600px and 25% for anything beyond 900px.

The following breakpoint suffixes are available by default:

- `@s` - 400px
- `@m` - 600px
- `@l` - 900px
- `@xl` - 1008px
- `@xxl` - 1280px

**More information:**

- [Responsive suffixes](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/#responsive-suffixes)

#### Specificity

Utility classes like these width classes always need to win when it comes to specificity, otherwise they're not doing their job correctly. You should never need to override a utility class, if you do you're doing something wrong. E.g. if you'd used a class of `gel-1/2` you would never want it to be anything other than 50%. If you want something other than 50% you should have used a different class.

To help enforce this way of thinking all width utilities classes proactively carry the `!important` keyword to boost their specificity.

### Sass Mixins
The GEL grid component exposes a collection of Sass Mixins which can be called within your Sass. Should you need to create a more bespoke component which is not possible using the standard utility classes.

**Example**

```scss
.my-component {
    @include gel-layout;
}

.my-component__item {
    @include gel-layout-item;
    @include gel-columns(1/2);

    @if $enhanced {
        @include mq($from: gel-bp-m) {
            @include gel-columns(1/4);
        }
    }
}
```

**Available Mixins**

- `@include gel-wrap` - create the outer grid wrapper
- `@include gel-layout` - defines a single grid row
- `@include gel-layout-item` - a single grid item
- `@include gel-columns($span, $columns)` - outputs a width for the requested number of columns, accepts either a fraction or number of columns

**Available Functions:**

- `gel-columns($span, $columns)` - returns a width value for the requested number of columns, accepts either a fraction or number of columns

### 1280px
The GEL Grid guideline has been updated to include a wider 1280px breakpoint. By default the grid supports this breakpoint. It can be displayed by setting the `$gel-grid-enable--1280-breakpoint` to `false`.

It is also possible to toggle the 1280px breakpoint on and off based on the presence of a specific class. If a class name is supplied e.g. `$gel-grid-1280-toggle-class: 'b-pw-1280';` then all wider 1280px styles will be scoped in this class.

**More information:**

- [ORB 1280px Documentation](http://www.bbc.co.uk/frameworks/orb/css#orb-1280)

### Box Sizing
The GEL Grid consistences of a combination of fixed gutters and margins with fluid width columns. This combination of fixed and fluid units is achieved using `box-sizing: border-box`.

If you do not have `border-box` defined globally on your project you will need to enable the `$gel-grid-enable--box-sizing` flag to enable a bundled fix.

**More information:**

- [Box Sizing Border Box FTW](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)

### inline-block & white-space
The GEL Grid is constructed using `display: inline-block;`. This technique allows us to create a more powerful and flexible grid than is possible with more traditional techniques likes the use of floats.

One downside to the use of `display: inline-block;` is the white-space which is introduced between `inline-block` elements. This space is a representation of the space between elements in the HTML. In order for the grid to work correctly this space needs to be removed.

There are a few ways you can do this:

#### HTML Fix
The best way to get around this issue is to remove the space between elements in your HTML. This could be done by minifying your markup or by using HTML comments to comment out the space:

```html
<div class="gel-layout">
    <div class="gel-layout__item gel-1/2"></div><!--
 --><div class="gel-layout__item gel-1/2"></div>
</div>
```

If you're building you're grid using something like ReactJS you will not have this problem with space between elements as a result of how the markup is generated by the ReactJS library.

#### CSS Fix
It is possible to collapse the space using CSS. An optional CSS fix can be enabled by setting the `$gel-grid-enable--whitespace-fix` flag to `true`.

*Note:* This is included as an optional fix as it is not 100% guaranteed to work. There are certain edge cases where this solution falls down. The only 100% guaranteed and recommended solution is to remove the space in the HTML.

## Configuration

The following configurable options are available:

### General Configuration

- `$gel-grid-namespace: 'gel-';` - the default namespace applied to all grid classes
- `$gel-grid-breakpoint-namespace: 'gel-bp-';` - the default namespace applied to breakpoint variables from [GEL Sass Tools](https://github.com/bbc/gel-sass-tools/blob/master/lib/settings/_globals.scss#L68)
- `$gel-grid-1280-toggle-class: null` - an optional scoping class to wrap all 1280px grid style in. Allows the wider grid to be used in a products that do not fully support the wider grid yet
- `$gel-grid-breakpoints` - a Sass map containing a list of breakpoints width classes should be generated for
- `$gel-grid-breakpoints--1280` - a Sass map containing a list of breakpoints which relate specifically to the 1280 breakpoint
- `$gel-grid-default-columns: 12` - the default number of columns the grid should be based on
- `$gel-grid-columns` - a Sass list containing a list of which fractions utility classes will be generated for

### Output Configuration

- `$gel-grid-enable--markup-output: false;` - output a collection of utility classes
- `$gel-grid-enable--1280-breakpoint: true;` - toggle the support for the wider 1280px grid
- `$gel-grid-enable--box-sizing: false;` - enable built in `box-sizing` rules if `box-sizing: border-box;` is not already defined
- `$gel-grid-enable--whitespace-fix: false;` - enable a built CSS fix to collapse the whitespace between `inline-block` items, this fix is not guaranteed to work 100% of the time

## Who is using this?

The following teams are currently using this component: GEL, News, Sport, Live, Search, BBC Food, Taster & Academy

If your team is using this component, let us know and we'll add you to the list.

## Credits

- [Shaun Bent](https://twitter.com/shaunbent)
- [Al Jones](https://twitter.com/Itsaljones)

The foundations of this grid is based on the great work of [Harry Roberts](https://twitter.com/csswizardry) and his [Inuit CSS Grid](https://github.com/inuitcss/objects.layout)

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
