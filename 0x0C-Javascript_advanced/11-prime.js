function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        let isprime = true;
        let limit = Math.round(Math.sqrt(i));
        for (var mod = 2; mod <= limit; mod++) {
            if (i % mod == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            count++;
        }
    }
    return count;
}

const performance = require('perf_hooks').performance;
const startTime = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(countPrimeNumbers, 0);
}
const endTime = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);