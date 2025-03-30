const jsonArray = [
    { id: 1, name: "Deepanshu" },
    { id: 2, name: "Raj" },
    { id: 3, name: "Aman" },
    { id: 1, name: "Deepanshu" }, // Duplicate
    { id: 4, name: "Kamesh" },
    { id: 2, name: "Raj" }  // Duplicate
];


function getDuplicate(){
    const output = [];
    const duplicateSet = new Set()

    for(let x of jsonArray){
        // if duplicate find then push it in output 
        if(duplicateSet.has(x.id)){
            output.push(x);
        }

        duplicateSet.add(x.id)


    }
    return output
}

console.log(getDuplicate());
