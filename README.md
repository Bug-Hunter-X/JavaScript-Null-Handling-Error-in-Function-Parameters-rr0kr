# JavaScript Null Handling Bug

This repository demonstrates a common error in JavaScript: incorrect handling of `null` or `undefined` values as function parameters.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file shows the corrected version.

## Bug Description
Failure to explicitly check for `null` or `undefined` inputs can lead to unexpected errors (e.g., `TypeError: Cannot read properties of null (reading 'property')`), particularly when interacting with external APIs or user-provided data. 

## Solution
Always explicitly check for `null` or `undefined` before using the parameter values within your functions to handle those scenarios appropriately. This improves code robustness and prevents runtime exceptions.