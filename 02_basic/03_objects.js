// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Fauzan",
    "full name": "Fauzan Khan",
    [mySym]: "mykey1",
    age: 22,
    location: "Delhi",
    email: "fauzan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(Object.keys(JsUser));

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "fauzan@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "fauzan@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());