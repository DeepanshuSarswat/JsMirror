// flat the Array

const nestedArray = [1, [2, [3, [4, 5]], 6], 7];

function flattenArray(arr) {
  let flatArray = [];

  function flatten(arr) {
    for (let itm of arr) {
        if(Array.isArray(itm)){
            flatten(itm)
        }
        else {
            flatArray.push(itm)
        }
    }
  }

  flatten(arr);

  return flatArray;
}

console.log(flattenArray(nestedArray));


// find the depth of the nested array


function findDepth(arr){
    let depth = 1;

    function depthFinder(arr){
        for(let itm of arr){
            if(Array.isArray(itm)){
                depth++;
                depthFinder(itm)
            }
        }   
    }

    depthFinder(arr);
    
    return depth;
}

console.log(findDepth(nestedArray));    


// flat Array till n depth

function findNDepth(arr, n){
    let flatArray = [];
    let currentDepth = 1;

    function depthFinder (arr){
        for(let itm of arr){
            if(Array.isArray(itm) && currentDepth < n){
                currentDepth++;
                depthFinder(itm);
            }
            else {
                flatArray.push(itm)
            }
        }
    }

    depthFinder(arr);

    return flatArray;
}

console.log(findNDepth(nestedArray, 2));

