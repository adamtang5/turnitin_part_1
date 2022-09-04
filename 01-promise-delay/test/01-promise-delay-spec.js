const chai = require('chai');
const expect = chai.expect;
const delay = require('../01-promise-delay');

describe('delay(ms)', function () {
    it('should return a Promise', function () {
        expect(delay(1000) instanceof Promise).to.be.true;
    });

    context('when the delay arg is 1000ms', function () {
        it('should return a Promise that resolves in 1000ms', function (done) {
            this.timeout(0);
            let start = Date.now();
            delay(1000).then(function () {
                let end = Date.now();
                // console.log(start, end);
                expect(end - start >= 1000).to.be.true;
                done();
            });
        })
    });

    context('when the delay arg is 6000ms', function () {
        it('should return a Promise that resolves in 6000ms', function (done) {
            this.timeout(0);
            let start = Date.now();
            delay(6000).then(function () {
                let end = Date.now();
                expect(end - start >= 6000).to.be.true;
                done();
            });
        });
    });

});
