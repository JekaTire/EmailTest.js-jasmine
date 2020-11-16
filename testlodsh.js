const _ = require('lodash');
let db = [
    {
        "Type": "user1",
        "sourceField": "Phone",
        "defaultValue": null,
        "required": true
    },
    {
        "Type": "user",
        "sourceField": "LastName",
        "defaultValue":null,
        "required": true
    },
    {
        "Type": "user",
        "sourceField": "FirstName",
        "defaultValue": null,
        "required": false,
    },
    {
        "Type": "user",
        "sourceField": "Id",
        "defaultValue": null,
        "required": false
    },
    {
        "Type": "user",
        "sourceField": "Id",
        "defaultValue": null,
        "required": false
    },
    {
        "Type": "user",
        "sourceField": "Title",
        "defaultValue": null,
        "required": false
    },
    {
        "Type": "user2",
        "sourceField": "orgId",
        "defaultValue": null,
        "required": true,
    },
    {
        "Type": "user3",
        "sourceField": "Email",
        "defaultValue": null,
        "required": true,
    },
    {
        "Type": "user5",
        "sourceField": "Phone",
        "defaultValue": null,
        "required": true
    }
];
let result =  _.find(db, { "sourceField": "Email",  "required": true });
console.log(result)
