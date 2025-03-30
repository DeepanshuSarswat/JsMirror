// Here we are creating promise using function

function createPromise(num){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("promise reolves" + " " + num)
        }, num*1000);
    })
}


const promseArr = [createPromise(2), createPromise(4), createPromise(6)];

// Here we are using promise.All
Promise.all(promseArr).then((res)=>{
    console.log(res, "promseArr");
})
.catch((err)=>{
    console.log(err);
})


// polifills for promiseAll
function polifillForPromiseAll(promiseArr){
    // promiseArr is the Array
    return new Promise((resolve, reject)=>{
        const output = [];
        promiseArr.forEach((element, index) => {
            element
            .then((data)=>{
                output[index] = data;
                if(output.length- 1 === index) resolve(output)
            })
            .catch((err)=>{
                reject(err)
            })
        });

    })
}

// polifillForPromiseAll(promseArr) -->> promise.all
// promise.all().then().catch()

polifillForPromiseAll(promseArr).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
    
})
