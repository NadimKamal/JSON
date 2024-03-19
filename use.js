let friendsFull_data = require("./friendsFull.json");
let friends_data = require("./friends.json");

console.log(friends_data.friends[2]["name"]);
console.log(friends_data.friends[1].skill[1]);
for (friend of friends) {
  console.log(friend);
}

for (friend of friends_data.friends) {
  console.log(friend.skill[0]);
}

for (friend of friends_data.friends) {
  console.log(friend.name);
}
console.log("=======");
for (friend of friends_data.friends) {
  console.log(friend.skill[1]);
}

for (friend of friendsFull_data.friends) {
  console.log(friend.skill[1]);
}
console.log("=======");
for (friend of friendsFull_data.friends) {
  console.log(friend.skill[0].frontend[1]);
}


friends_data.friends[0].name = "Kohli";

console.log(friends_data.friends[0].name);

for(x in friends_data){
    console.log(friends_data[x][1].skill);
}

