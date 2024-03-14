let players = require("./indivisual.json");

console.log(typeof players);
console.log(players);

console.log(players[0]);
console.log(players.length);

for (i = 0; i <= players.length-1; i++) {
  console.log(i, players[i]);
}
for (i = 0; i <= players.length-1; i++) {
  console.log(players[i].firstName);
}

for(player in players){
    // console.log(player);
    // console.log(players[player]);
    console.log(players[player].roll, players[player].firstName,players[player].lastName);
}
for(player of players){
    console.log(player.roll, player.firstName, player.lastName);
}
