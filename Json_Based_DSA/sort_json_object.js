const json = [
    { "name": "Kiran", "age": 22 },
    { "name": "Amit", "age": 25 },
    { "name": "Rahul", "age": 28 }
  ];

//   sort the json data based on the age Number, keep increasing order

const jsonBasedOnNumber = [...json];
jsonBasedOnNumber.sort((a, b)=> a.age - b.age);

console.log(jsonBasedOnNumber, "jsonBasedOnNumber");

//   sort the json data based on the age Number, keep decreasing order

jsonBasedOnNumber.sort((a, b)=> b.age - a.age);

console.log(jsonBasedOnNumber, "jsonBasedOnNumber");
  

//   sort the json data based on the name, keep increasing order

jsonBasedOnNumber.sort((a,b)=> a.name.localeCompare(b.name));
console.log(jsonBasedOnNumber, "jsonBasedOnNumber");


//   sort the json data based on the age Number, keep decreasing order

jsonBasedOnNumber.sort((a, b)=> b.name.localeCompare(a.name));

console.log(jsonBasedOnNumber, "jsonBasedOnNumber");