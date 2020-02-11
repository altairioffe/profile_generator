const readline = require('readline');

let name;
let location;
let favFood;
let drink;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('yo name? ', answer => {
  name = answer;

  rl.question('where you at? ', answer => {
    location = answer;

    rl.question('what you eat? ', answer => {
      favFood = answer;
      
      rl.question('what you drink? ', answer => {
        drink = answer;

        console.log(`My name is ${name}, I live in ${location}. I eat ${favFood} and drink ${drink}`);
       
        rl.close();
      });
    });
  });
 
});