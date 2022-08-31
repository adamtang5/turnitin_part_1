// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
