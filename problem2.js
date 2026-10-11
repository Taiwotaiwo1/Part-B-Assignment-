function diffObjects(oldObj, newObj){
    const result ={
        added: {},
        removed : {},
        changed : {}
    };

    // check for added and changed properties:
    for(const key of Object.keys(newObj)){
        if(!Object.hasOwn(oldObj, key)){
            result.added[key] = newObj[key];
        } else if(oldObj[key] !== newObj[key]){
            // property exists in both but has a different value
            result.changed[key] = {
                from: oldObj[key],
                to: newObj[key]
            }
        } 
    }
    return result
} 

//Test
console.log(
    diffObjects({
    name: "Setemi",
    role: "Engineer",
    country: "Jamaica"
},
{
    name: "Setemi",
    role: "Senior Engineer",
    city: "Kingdom"
}
));