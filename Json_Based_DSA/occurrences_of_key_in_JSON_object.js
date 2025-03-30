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
    let count = 0 ;

    function traverse(json){
        for(let x in json){
            if(typeof json[x] == 'object'){
                traverse(json[x])
            }
            else {
                if(x == targetKey) count = count+1;
                
            }
        }
    }

    traverse(json)

    return count
}

console.log(extractValues(jsonData,"name"));
// [ 'Deepanshu', 'Workplace', 'Raj', 'Aman' ]