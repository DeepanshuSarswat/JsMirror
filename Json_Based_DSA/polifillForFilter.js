const Arr = [1,2,3,4,5,6,7];

Array.prototype.myFilter = function(fn){
    const output = [];
    this.forEach((itm, index)=>{
       if(fn(itm, index, this)) output.push(fn(itm, index, this))
    })

    return output;
}

const value = Arr.myFilter(evenNumber);

function evenNumber(itm, index, arr){
    if(itm % 2 == 0){
        return itm
    }
}

console.log(value, "value");
