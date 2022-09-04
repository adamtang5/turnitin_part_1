const chai = require('chai');
const expect = chai.expect;
const removeDuplicates = require('../03-remove-duplicates');

describe('removeDuplicates(xs)', function () {
    beforeEach(() => {
        uniqueArr = ['1', 2, 3.0, 4n, true, null];
        arrWithDups = [1, '1', 2, 1, '2', '1', 4n, 4n, 3.0, false, null, 3.0, null, true, false];
    })
    it('should return an array', function () {
        expect(Array.isArray(removeDuplicates(uniqueArr))).to.be.true;
        expect(Array.isArray(removeDuplicates(arrWithDups))).to.be.true;
    })
});
