function deepFreeze(obj){
    // stop if the value is not an object or is null
    if(obj === null || typeof obj !== "object"){
        return obj;
    }
    // freeze all nested objects
    for(const key of Object.keys(obj)){
        deepFreeze(obj[key]);
    }

    // freeze the current objects
    return Object.freeze(obj);
}

const config = deepFreeze({
    api:{
        baseUrl: "https://x.com",
        retries: 3
    },
    debug: false
});

config.api.baseUrl="https://changed.com";
config.debug = true;
console.log(config.api.baseUrl); //"https://x.com"
console.log(config.debug);      // false
console.log(Object.isFrozen(config.api)); //true