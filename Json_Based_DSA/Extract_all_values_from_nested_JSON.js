const jsonData = {
    user: {
        name: "Deepanshu",
        details: {
            age: 25,
            address: {
                city: "Delhi",
                zip: "110001",
                name: "Workplace"
            }
        }
    },
    employees: [
        { name: "Raj", age: 30 },
        { name: "Aman", age: 28 }
    ]
};

function extractValues(json, targetKey){
    const output = [];

    function traverse(json){
        for(let x in json){
            if(typeof json[x] == 'object'){
                traverse(json[x])
            }
            else {
                if(x == targetKey) output.push(json[x])
                
            }
        }
    }

    traverse(json)

    return output
}

console.log(extractValues(jsonData,"name"));
