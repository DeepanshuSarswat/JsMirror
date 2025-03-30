const json = [
    { "id": 1, "category": "Fruit", "name": "Apple" },
    { "id": 2, "category": "Vegetable", "name": "Carrot" },
    { "id": 3, "category": "Fruit", "name": "Banana" },
    { "id": 4, "category": "Vegetable", "name": "Spinach" },
    { "id": 5, "category": "Fruit", "name": "Mango" }
  ]

  function groupJson(obj, category){
    const output  = {};

    for(let el of obj){
        if(!output[el[category]]){
            output[el[category]] = [];
        }

        output[el[category]].push(el)
    }

    return output
  }
  
  console.log(groupJson(json, 'category'));
  

//   output 
// {
//     Fruit: [
//       { id: 1, category: 'Fruit', name: 'Apple' },
//       { id: 3, category: 'Fruit', name: 'Banana' },
//       { id: 5, category: 'Fruit', name: 'Mango' }
//     ],
//     Vegetable: [
//       { id: 2, category: 'Vegetable', name: 'Carrot' },
//       { id: 4, category: 'Vegetable', name: 'Spinach' }
//     ]
//   }