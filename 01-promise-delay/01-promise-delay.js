const makePromise = require('./test/promise-delay');

// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms);
    });
}
