const Arr = [1,2,3,4,5,6];

const value = Arr.reduce((acc, current)=>{
    acc += current;

    return acc;
}, 0)


Array.prototype.myReduce = function(fn, initialValue){
    const arrValue = this;
    let acc;
    let startIndex;

    if(initialValue){
        acc = initialValue;
        startIndex = 0
    }
    else {
        acc = arrValue[0];
        startIndex = 1;
    }

    for(let i = startIndex; i<arrValue.length; i++){
        acc = fn(acc, arrValue[i], i, arrValue)
    }
    return acc
}

const value2 = Arr.myReduce(calculate, 0);

function calculate(acc, element, index, arrValue){
    const currentValue = acc + element;
    return currentValue;
}

console.log(value2, "value2");
