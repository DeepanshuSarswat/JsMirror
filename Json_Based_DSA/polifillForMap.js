const Arr = [1,2,3,4,5,6,7,8];

Array.prototype.myMap = function(fn){
    const output = []
    this.forEach((data,index)=>{
        output.push(fn(data, index, this))
    })

    return output
}

const newArr = Arr.myMap(doubleNumber);

function doubleNumber(num, index, arr){
    return num*2;
}

console.log(newArr);
