const data = {
    name: "Deepanshu",
    age: null,
    address: {
      city: "Delhi",
      state: undefined,
      country: "India",
    },
    skills: ["JavaScript", null, "React"],
    preferences: {
      likes: null,
      hobbies: [undefined, "Coding", null],
    },
  };

//   our task is to remove undefined and null from every wwhere from the Object.
// Recursive Approach to Clean JSON Data
// We will use recursion to remove null and undefined values from a JSON object, following these steps:

// Check if the data is an array

// If it's an array, recursively clean each element and filter out null and undefined values.

// Check if the data is an object (and not null)

// If it's an object, iterate over its keys using a for...in loop.

// Maintain a separate memory (a new object) to store cleaned key-value pairs.

// Recursively call the cleanup function on each value.

// Handle primitive values

// If a value is not an array or object, return it as-is and store it in the result.

// By following this approach, we ensure that all null and undefined values are removed while preserving the structure of the data.

function cleanObj(data){
    if(Array.isArray(data)){
      return data.map(cleanObj).filter(data=>data != null)
    }
    else if(typeof data == 'object' && data != null ){
        const obj = {};

        for(let key in data){
            const value = cleanObj(data[key]);

            if(value != null && value!= undefined){
                obj[key] = value;
            }
        }

        return obj
    }

    return data

}

console.log(cleanObj(data));
