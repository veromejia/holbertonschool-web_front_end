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

console.log(countPrimeNumbers() + ' total of prime numbers');
const performance = require('perf_hooks').performance;
const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);