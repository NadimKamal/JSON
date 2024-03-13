
let player = {
  name: "Sakib Al Hasan",
  fatherName: "Khondoker Masroor Reza",
  motherName: "Shirin Reza",
  subjects: ["Bangla", "English", "Math", "Science"],
  roll: 23,
};
// console.log(typeof player);
// console.log(player.name);


let json = JSON.stringify(player);
// console.log(typeof json);
// console.log(json);

let person = `{
  "name":"Sakib Al Hasan",
  "fatherName":"Khondoker Masroor Reza",
  "motherName":"Shirin Reza",
  "roll":23
}`;

let personObj = JSON.parse(person);

// subjects: ['Sociology', 'Economics', 'Staistics', 'Bussiness Study'],
// console.log(personObj.name);


let players = `[
  {
    "firstName": "Sakib Al",
    "lastName": "Hasan",
    "roll": 1,
    "address": "Uttara",
    "zipCode": 1230
    // skill: ["PHP", "JS", "Ajax"],
  },
  {
    "firstName": "Mushfiqur",
    "lastName": "Rahim",
    "roll": 2,
    "address": "Dhanmondi",
    "zipCode": 1235
    // skill: ["Math", "GK", "IELTS"],
  },
  {
    "firstName": "Tamim",
    "lastName": "Iqbal",
    "roll": 3,
    "address": "Mirpur",
    "zipCode": 1630
    // skill: ["HTML", "CSS", "Bootstrap"],
  }
]`;

console.log(typeof players);