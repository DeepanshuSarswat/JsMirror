const json  = [
    {
      "id": 1, "name": "Electronics", "children": [
        { "id": 2, "name": "Mobiles", "children": [] },
        { "id": 3, "name": "Laptops", "children": [
          { "id": 4, "name": "Gaming Laptops", "children": [] },
          { "id": 5, "name": "Ultrabooks", "children": [] }
        ]}
      ]
    }
];

function flattenTree(json){
    const output = [];

    function traverse(nodes){
        for(let node of nodes){
            if(node.children.length){
                traverse(node.children); // 🔥 Fix: Pass `node.children`, not `node`
            }
            else{
                output.push(node);
            }
        }
    }

    traverse(json);
    return output;
}

console.log(flattenTree(json));

// output

// [
//     { "id": 2, "name": "Mobiles", "children": [] },
//     { "id": 4, "name": "Gaming Laptops", "children": [] },
//     { "id": 5, "name": "Ultrabooks", "children": [] }
//   ]
  
