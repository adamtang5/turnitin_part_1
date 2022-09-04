const chai = require('chai');
const expect = chai.expect;
const removeDuplicates = require('../03-remove-duplicates');

describe('removeDuplicates(xs)', function () {
    beforeEach(() => {
        uniqueArr = ['1', 2, 3.0, 4n, true, null];
        arrWithDups = [1, '1', 2, 1, '2', '1', 4n, 4n, 3.0, false, null, 3.0, null, true, false];
        uniqueResult = removeDuplicates(uniqueArr);
        resultAfterRemovingDups = removeDuplicates(arrWithDups);
    });

    it('should return an array', function () {
        expect(Array.isArray(uniqueResult)).to.be.true;
        expect(Array.isArray(resultAfterRemovingDups)).to.be.true;
    });

    it('should not remove any elements from uniqueArr', function () {
        expect(uniqueResult).to.have.length(uniqueArr.length);
        for (let i = 0; i < uniqueArr.length; i++) {
            expect(uniqueResult[i]).to.equal(uniqueArr[i]);
        }
    });

    it('should remove duplicate elements from arrWithDups', function () {
        expect(resultAfterRemovingDups.length < arrWithDups.length).to.be.true;
    });

    it('should return array with unique elements', function () {
        for (let i = 0; i < resultAfterRemovingDups.length; i++) {
            const el = resultAfterRemovingDups[i];
            const rest = [...resultAfterRemovingDups.slice(0, i),
            ...resultAfterRemovingDups.slice(i + 1)];
            expect(rest.includes(el)).to.be.false;
        }
    });

    it('should preserve order in returned array', function () {
        for (let i = 1; i < resultAfterRemovingDups.length; i++) {
            const prevEl = resultAfterRemovingDups[i - 1];
            const currEl = resultAfterRemovingDups[i];
            expect(arrWithDups.indexOf(prevEl) < arrWithDups.indexOf(currEl)).to.be.true;
        }
    })
});
