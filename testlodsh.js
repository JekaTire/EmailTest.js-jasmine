const _ = require('lodash');
const db = require('./db.json')
let result = _.find(db, { "sourceField": "Email"});
console.log(result)
