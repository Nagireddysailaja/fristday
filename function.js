
//Study synchronous and asynchronous programming: Callbacks, Promises, and async/await. Implement examples for each.
//Convert callback-based code to use Promises and async/await.
//synchronous 
function lucky(name) {
    console.log(`Hello, ${name}!`);
}

lucky("little");

function vicky(name) {
    console.log(`Hello, ${name}!`);
}

vicky("beauty");

//if we pass number of task but it will be excute step by step that is known as synchronous
//if we pass number of task but it will be excute at a time that is known as asynchronous
// it will be use the functions  callback,promise,await:async

// Asynchronous with callback
// a function with call another function that also known as callback function.
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "vicky", age: 25 };
        callback(data);
    }, 3000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


// Creating a Promise
// promise is a object it will be return the function and excute that is also known as promise and if there are 
// three status pending ,successful, rejected.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "lucky", age: 25 };
            resolve(data);
        }, 2000);
    });
}

// Consuming a Promise
fetchData()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Using async/await
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "sailu", age: 25 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();





  