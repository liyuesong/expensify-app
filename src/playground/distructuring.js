// 
// Object Destructuring
//

// const person = {
//     name: "yuesong",
//     age: 18,
//     location: {
//         city: "San Jose",
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // ES6 Syntax - Destructuring
// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher;
// console.log(publisherName);


// 
// Array Destructuring
//

// const address = ['1487 Doxey Ct', 'San Jose', 'CA', '95131'];

// const [, city = "New York", state] = address;

// console.log(`You are in ${city} ${state}.`);
// // not clear
// // console.log(`You are in ${address[1]} ${address[2]}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);