# GEL Grid

A flexible code implementation of the GEL Grid.

**This repository forms part of the the [GEL Foundations](https://github.com/bbc/gel-foundations).**

## What is this?

This is an implementation of our [GEL Grid Guidelines](http://www.bbc.co.uk/gel/guidelines/grid).
The Grid provides a way of creating flexible and unique layouts whilst also maintaining consistent margins, gutters and containing widths across the BBC, online.
The GEL Grid has been established to work on all devices and is independent of device size and resolution.

## How to enable the 1280px grid

Ensure the scss configuration option `$gel-grid-enable--1280-breakpoint` is set to true and ensure the presence of the class `"b-pw-1280"` on a parent element (see: [http://www.bbc.co.uk/frameworks/orb/css#orb-1280]), this will also ensure that the navigation bar and footer bar are also displayed in 1280px width.
