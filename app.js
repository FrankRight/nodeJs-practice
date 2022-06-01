const { flattenDeep } = require("lodash");

const lodashArray = [1, [2, [3, 4, [5, 6]]]];
console.log(flattenDeep(lodashArray)); // [1, 2, 3, 4, 5, 6]
