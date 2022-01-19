//////Importing core module fs
////const fs = require('fs');

////__dirname = "C:\Users\ghatg\source\repos\Lab_InClass";
////fs.readdir(__dirname, (err, files) => {
////    if (err)
////        console.log(err);
////    else {
////        console.log("\nCurrent directory filenames:");
////        files.forEach(file => {
////            console.log(file);
////        })
////    }
////})



const { v4: uuidv4 } = require('uuid');
const str = uuidv4();
console.log(str);





