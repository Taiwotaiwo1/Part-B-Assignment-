function validateSchema(obj, schema){
    const errors = [];
    // check every key and expected type in the schema
    for (const [key, expectedType] of Object.entries(schema)){
        
    // check if the property exists
    if(!Object.hasOwn(obj, key)){
        errors.push(`${key}: missing property`);
        continue;
    }
    // check if the property's type matches
    if(typeof obj[key] !== expectedType){
        errors.push(
            `${key}: expected ${expectedType}, got ${typeof obj[key]}`
        );
    }
    }
    return errors;
}
//Test
const schema ={
    name:"string",
    age : "number",
    isAdmin: "boolean"
};
console.log(
    validateSchema(
        {name: "Ada", age: 21, isAdmin: false},
        schema
    )
);  //[]

console.log(
    validateSchema(
        {name:"Ada", age: "21"},
        schema
    )
); // ["age: expected number, got string", "isAdmin: missing property"]
