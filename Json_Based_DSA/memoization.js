// Memoized Addition Function

function add(a, b, c) {
    return a + b + c;
}

function memoize(fn) {
    const caches = {}; // Store computed results

    return function (...args) {
        const key = JSON.stringify(args); // Create a unique key for arguments

        if (caches[key]) {
            console.log("Fetching from cache for:", key);
            return caches[key]; // Return cached result
        } else {
            const result = fn(...args);
            caches[key] = result; // Store result correctly
            console.log("Computing result for:", key);
            return result;
        }
    };
}



const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2, 3))
console.log(memoizedAdd(1, 2, 3))
console.log(memoizedAdd(1, 2, 3))

