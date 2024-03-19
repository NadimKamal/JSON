//
//
//
let friends = {
  name: "Benjamin Andrew Stokes",
  age: 31,
  skill: ["Html", "CSS"],
};

let stringifyFriends = JSON.stringify(friends);
console.log(stringifyFriends);
console.log(typeof stringifyFriends);

let parseFriends = JSON.parse(stringifyFriends);
console.log(parseFriends);
console.log(typeof parseFriends);

let buddy = `{
    name: "Kevin Pietersen",
    age: 30,
    skill: ["PHP", "Laravel"],
}`;

let stringifyBuddy = JSON.stringify(buddy);
console.log(stringifyBuddy);
console.log(typeof stringifyBuddy);

let parseBuddy = JSON.parse(stringifyBuddy);
console.log(parseBuddy);
console.log(typeof parseBuddy);
