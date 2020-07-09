var alphabet = "abcdefghijklmnopqrstuvwxyz";
var output = "";
var successes = 0;

// var randomInt = Math.floor(Math.random() * (alphabet.length - 3));
// output = output + alphabet[randomInt];

for (var i = 0; i <= 33; i++) {
  /*
  if (output[i - 1] == " ") {
    randomInt = Math.floor(Math.random() * (alphabet.length - 3));
  } else {
    randomInt = Math.floor(Math.random() * alphabet.length);
  }
  */

  randomInt = Math.floor(Math.random() * alphabet.length);

  output = output + alphabet[randomInt];
}

document.getElementById("text").innerHTML = output;

document.getElementById("successes").innerHTML = "Score: " + successes;

function trackChange(value, activatedPreviously) {

  /*
  console.log(value);
  console.log("value[value.length - 1]: " + value[value.length - 1]);
  console.log("output[0]: " + output[0]);
  */

  if (value[value.length - 1] == output[0]) {

    successes++;
    document.getElementById("successes").innerHTML = "Score: " + successes;

    if (output[i - 1] == " ") {
      randomInt = Math.floor(Math.random() * (alphabet.length - 3));
    } else {
      randomInt = Math.floor(Math.random() * alphabet.length);
    }

    // output = "<b>" + output[successes - 1] + "</b>" + output.slice(1) + alphabet[randomInt];
    output = output.slice(1) + alphabet[randomInt];

    document.getElementById("text").innerHTML = output;
  }
  /* 
         else {
             console.log(value.length);
             
             successes--;
             document.getElementById("successes").innerHTML = "Score: " + successes;
         }
         */

}