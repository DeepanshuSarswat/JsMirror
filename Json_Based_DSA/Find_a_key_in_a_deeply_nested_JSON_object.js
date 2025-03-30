const data = {
    user: {
        name: "Deepanshu",
        details: {
            age: 25,
            address: {
                city: "Delhi",
                country: "India"
            }
        },
        preferences: {
            theme: "dark",
            notifications: {
                email: true,
                sms: false
            }
        }
    }
};

function extractValues(data, targetKey){
    let value = null;

    function traverse(obj){
        for(let x in obj){
            if(x == targetKey){
                value = obj[x];
                return
            }

            if(typeof obj[x] == 'object') traverse(obj[x])
        }
    }

    traverse(data)

    return value;
}

console.log(extractValues(data, "city"));
