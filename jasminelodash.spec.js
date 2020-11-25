const _ = require('lodash');
const db = require ('./support/db.json')
describe('check success url', () => {

    it('check price and runtime', async () => {
        expect(_.find(db, {"sourceField": "Email"})).not.toEqual(undefined);
        expect(_.find(db, {"sourceField": "Email"})).not.toEqual(0);
        expect(_.find(db, {"sourceField": "Email"})).not.toEqual(false);

    });
});
