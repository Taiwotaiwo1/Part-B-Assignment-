function createCounter(){
    // private variable, accessible only inside the function
    let count = 0;
    return{
        increment(){
            count ++;
        },

        decrement(){
            count --;
        },
        get value(){
            return count;
        }
    };
}
//Test
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1
console.log(counter.count); // undefined