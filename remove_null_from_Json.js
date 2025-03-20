const jsonArray = [
    { id: 1, name: "Deepanshu", role: "Frontend" },
    { id: 2, name: "Raj", role: "Backend" },
    { id: 3, name: "Aman", role: "Frontend" },
    { id: 4, name: "Kamal", role: "Backend" },
    { id: 5, name: "Suresh", role: "Full Stack" }
];




function groupByUsingObject(jsonArray, role){
    const newObj = {};

    for(let el of jsonArray){
        const value = el[role];
        if(newObj[value]){
            newObj[value].push(el)
        }
        else{
        newObj[value] = [];
        newObj[value].push(el)
        }
    }
    return newObj;
}

console.log(groupByUsingObject(jsonArray, "role"));
