// 1. Require your node modules
const mongoose = require('mongoose')

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire')
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';
// 4. Open your mongoose connection
mongoose.connect(connectionString,{ useNewUrlParser: true})
const vampireData = require('./populateVampires')
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireData,(err,data) => {
//     console.log('added provided vampire data')
//     mongoose.connection.close();
// });
// ### Add some new vampire data
// Vampire.create(
//     {name: 'Jean-Claude',
//     hair_color: 'midnight blue',
//     eye_color: 'ocean blue',
//     dob: "December 31, 1860",
//     loves: ["Anita","Blood"],
//     location: "Saint Louis, Missiouri",
//     gender: 'm',
//     victims: 698,
//     }, (err, createdVampire) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log(createdVampire);
//         }
//     }
// );

// Vampire.create(
//     {name: 'Ash',
//     hair_color: 'platinum blond',
//     eye_color: 'sky blue',
//     dob: "August 12, 1905",
//     loves: ["Jean-Claude","Himself"],
//     location: "Saint Louis, Missiouri",
//     gender: 'm',
//     victims: 486,
//     }, (err, createdVampire) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log(createdVampire);
//         }
//     }
// );

// Vampire.create(
//     {name: 'Marmee Noir',
//     hair_color: 'Black',
//     eye_color: 'Black',
//     dob: "-12000",
//     loves: ["Death","Power"],
//     location: "Unknown",
//     gender: 'f',
//     victims: 1000000000,
//     }, (err, createdVampire) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log(createdVampire);
//         }
//     }
// );

// Vampire.create(
//     {name: 'Belle Morte',
//     hair_color: 'Blonde',
//     eye_color: 'royal blue',
//     dob: "June 7, 1649",
//     loves: ["Power","Herself"],
//     location: "Europe",
//     gender: 'f',
//     victims: 4879,
//     }, (err, createdVampire) => {
//         if(err) {
//             console.log(err);
//         }else {
//             console.log(createdVampire);
//         }
//     }
// );


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
