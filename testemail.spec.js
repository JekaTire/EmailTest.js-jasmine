const db = require ('./db.json');
describe('search email in sourceField', () => {
    it('check Email required true', () => {
        expect(db.find(el => el.sourceField === "Email").required).toEqual(true);
    });
});
