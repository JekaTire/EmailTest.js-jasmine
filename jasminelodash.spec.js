const _ = require('lodash');
const db = require ('./db.json')

describe('search email in sourceField', () => {
    it('check Email required true', () => {
        expect(_.find(db, { "sourceField": "Email",  "required": true }));
    });
});
