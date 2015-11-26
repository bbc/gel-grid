# GEL Grid

A flexible code implementation of the GEL Grid.

**This repository forms part of the the [GEL Foundations](https://github.com/bbc/gel-foundations).**

## What is this?

This is an implementation of our [GEL Grid Guidelines](http://www.bbc.co.uk/gel/guidelines/grid).
The Grid provides a way of creating flexible and unique layouts whilst also maintaining consistent margins, gutters and containing widths across the BBC, online.
The GEL Grid has been established to work on all devices and is independent of device size and resolution.

## How to enable the 1280px grid

Ensure the scss configuration option `$gel-grid-enable--1280-breakpoint` is set to true. You can also optionally choose to only enable 1280 styling in the presence of a class specified by `$gel-grid-1280-toggle-class`. i.e. [this can be set up to only use 1280px styling when the `b-pw-1280` class is present](http://www.bbc.co.uk/frameworks/orb/css).
