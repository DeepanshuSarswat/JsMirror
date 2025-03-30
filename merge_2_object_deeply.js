const obj1 = { 
    name: "Deepanshu", 
    details: { age: 25, skills: { primary: "JS" } } 
};
const obj2 = { 
    details: { age: 26, skills: { secondary: "React" } } 
};


function deepCoppy(target, source){
    for(let x in source){
        if(source.hasOwnProperty(x)){
            
            if(typeof source[x] == 'object' && source[x] != null && !Array.isArray(source[x])){
                if(target[x]){
                    deepCoppy(target[x], source[x])
                }
                else {
                    target[x] = {};
                }
            }
            else {
                target[x] = source[x]
            }
        }
    }

    return target;
}

console.log(deepCoppy(obj1, obj2));

