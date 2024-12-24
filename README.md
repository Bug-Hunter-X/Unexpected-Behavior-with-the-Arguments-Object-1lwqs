# Unexpected Behavior with the Arguments Object

This repository demonstrates an uncommon JavaScript error related to the `arguments` object. The `arguments` object, while appearing array-like, isn't a true array and has quirks that can lead to unexpected behavior if not handled carefully.

## Problem Description

The provided code uses the `arguments` object to access function parameters. Accessing indices beyond the explicitly declared parameters might lead to an error or unexpected results. 

## Solution

The recommended solution is to use rest parameters (...) to handle variable numbers of parameters in a cleaner and more predictable way.  This eliminates the problematic arguments object.

## How to reproduce
1. Clone this repo
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the updated code using rest parameters.