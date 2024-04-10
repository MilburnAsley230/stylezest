const print = require('./print')
const flattenArray = require('./flattenArray')
const capitalizeFirstLetter = require('./capitalizeFirstLetter')
const numberArrayToString = require('./numberArrayToString')

module.exports = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }