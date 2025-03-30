// Implement a currying function in JavaScript that takes multiple arguments and returns their sum when a specified number of arguments (e.g., 5) is reached.

const ARG_LENGTH = 5;

function sum(...arg){
    if(arg.length == ARG_LENGTH) return arg.reduce((acc, curr)=> acc = acc+curr, 0);
    else {
        console.log(arg);
        return function recursion(...arg2){
            arg = arg.concat(arg2);
            if(arg.length == ARG_LENGTH){
                return arg.reduce((acc, curr)=> acc = acc+curr, 0)
            }
            else {
               return recursion;
            }
        }
    }
}

const value = sum(1,2)(3)(4,5);
console.log(value, "value");