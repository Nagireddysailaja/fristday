
 //synchronous and Asynchronous
function lucky(name) {
    console.log(`Hello, ${name}!`);
}

lucky("little");

function vicky(name) {
    console.log(`Hello, ${name}!`);
}

vicky("beauty");


// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "vicky", age: 25 };
        callback(data);
    }, 3000);
}

fetchData((data) => {
    console.log("Data received:", data);
});


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





  
