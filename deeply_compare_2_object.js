
// Check if two JSON objects are deeply equal. 


const objA = { name: "Deepanshu", details: { age: 25, city: "Delhi" } };
const objB = { name: "Deepanshu", details: { age: 22, city: "Delhi" } };


function deepCheck(objA, objB){

    if(objA === objB) return true;

    if(typeof objA !== 'object' || typeof objB !== 'object' || objA == null || objB == null) return false;

    const key1 = Object.keys(objA)
    const key2 = Object.keys(objB)

    if(key1.length !== key2.length) return false;

    for (const element of key1) {
        if(!key2.includes(element)) return false;

        if(!deepCheck(objA[element], objB[element])) return false
    }
    return true;
}

const value = deepCheck(objA, objB);
console.log(value);
