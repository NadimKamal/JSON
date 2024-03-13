let Person = {
    name: "Tamim Iqbal",
    age: 25,
    skill: ['PHP', 'Laravel', 'Ajax']
}

let Friends = [
    "Shakib",
    "Murtoza",
    "Imrul",
    "Mahmudullah",
    "Mushfiq",
    "Anamul",
    "Ashraful"
]
// for(i in Friends) console.log(i);


// for(i=0; i<Friends.length; i++){
//     console.log(i, Friends[i]);
// }

// console.log(Friends.length);
let players = [
  {
    firstName: "Tamim",
    lastName: "Iqbal",
    roll: 1,
    address: "Uttara",
    zipCode: 1230,
    skill: ["PHP", "JS", "Ajax"],
  },
  {
    firstName: "Sakib Al",
    lastName: "Hasan",
    roll: 2,
    address: "Dhanmondi",
    zipCode: 1235,
    skill: ["Math", "GK", "IELTS"],
  },
  {
    firstName: "Mushfiqur",
    lastName: "Rahim",
    roll: 3,
    address: "Mirpur",
    zipCode: 1630,
    skill: ["HTML", "CSS", "Bootstrap"],
  },
];

// console.log(players[2].skill[1]);

for (player of players) {
  console.log(player.roll, player.firstName, player.lastName, player.skill);
}