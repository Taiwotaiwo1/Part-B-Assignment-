//let objA = {a:1, b:{c:2}}
//let objB = {a:1, b:{c:2}}

// function deepEqual(objA, objB){
//     if(objA === objB){
//         return true;
//     }
//     else{return false}
// }
// console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}));
// console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:3}}));
// console.log(deepEqual({a:1}, {a:1, b:2}))

function deepEqual(objA, objB){
    // check if both values are equal
    if(objA === objB){
        return true;
    }
    if (
        objA === null ||
        objB === null  ||
        typeof objA !== "object" ||
        typeof objB !== "object"
    ){
        return false
    }
    //get keys for both objects
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    //check if both keys have the same number of keys
    if(keysA.length !== keysB.length){
        return false;
    }
// compare each key and its value recursively
    for (const key of keysA){
    if (
        !Object.hasOwn(objB, key) ||
    !deepEqual(objA[key], objB[key])
)
{
    return false
}
    }
return true
}

console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:2}}));
console.log(deepEqual({a:1, b:{c:2}}, {a:1, b:{c:3}}));
console.log(deepEqual({a:1}, {a:1, b:2}))
