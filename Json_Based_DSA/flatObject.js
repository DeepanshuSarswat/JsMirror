function flatObject(obj) {
    let flatObj = {};

    function flat(obj, parentKey = '') {
        for (let key in obj) {
            let newKey = parentKey ? `${parentKey}_${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flat(obj[key], newKey);
            } else {
                flatObj[newKey] = obj[key];
            }
        }
    }

    flat(obj);
    return flatObj;
}

const deeplyNestedObject = {
    id: 1,
    name: "Deepanshu",
    details: {
        age: 27,
        address: {
            city: "Delhi",
            country: "India",
            coordinates: {
                lat: 28.7041,
                lng: 77.1025
            }
        },
        hobbies: ["Coding", "Music", "Gaming"],
        preferences: {
            theme: "dark",
            notifications: {
                email: true,
                sms: false,
                push: {
                    enabled: true,
                    frequency: "daily"
                }
            }
        }
    },
    friends: [
        {
            id: 2,
            name: "Kamesh",
            contact: {
                phone: "9876543210",
                email: "kamesh@example.com"
            },
            skills: ["JavaScript", "React", "Node.js"]
        },
        {
            id: 3,
            name: "Aarav",
            contact: {
                phone: "9123456789",
                email: "aarav@example.com"
            },
            skills: ["Python", "Django", "Machine Learning"]
        }
    ],
    projects: {
        active: [
            {
                title: "Billing Software",
                techStack: ["MERN", "GraphQL"],
                contributors: ["Deepanshu", "Kamesh"]
            }
        ],
        completed: [
            {
                title: "Drawing Web App",
                techStack: ["Angular", "Firebase"],
                contributors: ["Deepanshu"]
            }
        ]
    }
};

console.log(flatObject(deeplyNestedObject));

