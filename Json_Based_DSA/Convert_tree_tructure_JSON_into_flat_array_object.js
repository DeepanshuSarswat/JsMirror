function flattenTree(data){
    const output  = [];

    function traverse(data){
        for(let x of data){
            const {children, ...rest} =  x;
            output.push(rest);

            if(children && children.length){
                traverse(children)
            }
        }
    }

    traverse(data);

    return output;
}


const json = [
    {
      "id": 1,
      "name": "CEO",
      "parentId": null,
      "children": [
        {
          "id": 2,
          "name": "CTO",
          "parentId": 1,
          "children": [
            {
              "id": 4,
              "name": "Engineering Manager",
              "parentId": 2,
              "children": [
                {
                  "id": 5,
                  "name": "Software Engineer",
                  "parentId": 4,
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "CFO",
          "parentId": 1,
          "children": [
            {
              "id": 6,
              "name": "Finance Manager",
              "parentId": 3,
              "children": []
            }
          ]
        }
      ]
    }
  ]

console.log(flattenTree(json));

// output
// [
//     { id: 1, name: 'CEO', parentId: null },
//     { id: 2, name: 'CTO', parentId: 1 },
//     { id: 4, name: 'Engineering Manager', parentId: 2 },
//     { id: 5, name: 'Software Engineer', parentId: 4 },
//     { id: 3, name: 'CFO', parentId: 1 },
//     { id: 6, name: 'Finance Manager', parentId: 3 }
// ]