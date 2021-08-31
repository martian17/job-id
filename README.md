# job-id.js

This module generates very short numeric IDs similar to how McDonalds assign numbers to their customers in queue.

## install
```
npm install job-id
```

## usage example
```javascript
const ID = require("job-id");

ID.get();//returns "0"
ID.get();//returns "1"
ID.get();//returns "2"
ID.get();//returns "3"
ID.free("2");
ID.get();//returns "2"
ID.get();//returns "4"
ID.free("5");//warning: the id given is not used (5)
```

## use cases
* process numbering (delivery ID, rendering job naming etc)
* queue numbering (similar to how McDolalds assigns numbers to customers)

## Efficiency and Complexity
The `get` and `free` operations should be done in O(1) time since this module uses hash tables internally
The memory will be O(n) where n is the maximum value of the numeric ID.

## Feature in development
An internal variable `max` is used to denote the max value of the numeric id, and when an ID with the value `max` is freed, `max` falls back to the next smallest used id following a linked list reference, keeping the data footprint as small as possible.
