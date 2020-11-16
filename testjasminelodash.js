const _ = require('lodash');
const db = [
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
        "Type": "user",
        "sourceField": "orgId",
        "defaultValue": null,
        "required": true,
    },
    {
        "Type": "user",
        "sourceField": "Email",
        "defaultValue": null,
        "required": true,
    },
    {
        "Type": "user",
        "sourceField": "Phone",
        "defaultValue": null,
        "required": false
    }
];

describe('search email in sourceField', () => {
    it('check Email required true', () => {
        expect(_.find(db, { "sourceField": "Email",  "required": true }));
    });
});
