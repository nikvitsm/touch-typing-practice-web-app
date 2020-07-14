var alphabet = "abcdefghijklmnopqrstuvwxyz";
var enabledLetters = true;
var enabledNumbers = false;
var enabledCharacters = false;

var output = "";
var score = 0;
var highestScore = 0;
var outputHTML = "";

var scoreHTML = document.getElementById("score");
var highestScoreHTML = document.getElementById("highestScore");

generateText();

function generateText() {
  output = "";

  if (score > highestScore) {
    highestScore = score;
  }

  score = 0;
  outputHTML = "";
  document.getElementById("text").innerHTML = "";
  document.getElementById("score").innerHTML = "Score: " + score;

  if (alphabet == "") { return; }

  randomInt = Math.floor(Math.random() * alphabet.length);

  output = output + alphabet[randomInt];
  outputHTML = "<span id=\"firstChar\">" + output[0] + "</span>" + output.slice(1);

  for (var i = 0; i <= 19; i++) {
    randomInt = Math.floor(Math.random() * alphabet.length);

    output = output + alphabet[randomInt];
    outputHTML = outputHTML + alphabet[randomInt];
  }

  document.getElementById("text").innerHTML = outputHTML;
}


function enableNumbers() {
  if (!enabledNumbers) {
    alphabet += "1234567890";
    enabledNumbers = true;
  } else {
    alphabet = alphabet.replace("1234567890", "");
    enabledNumbers = false;
  }
  document.getElementById("userInput").value = "";
  generateText();
}

function enableCharacters() {
  if (!enabledCharacters) {
    alphabet += "!@#$%^&*()";
    enabledCharacters = true;
  } else {
    alphabet = alphabet.replace("!@#$%^&*()", "");
    console.log(alphabet);
    enabledCharacters = false;
  }
  document.getElementById("userInput").value = "";
  generateText();
}

function enableLetters() {
  if (!enabledLetters) {
    alphabet += "abcdefghijklmnopqrstuvwxyz";
    enabledLetters = true;
  } else {
    alphabet = alphabet.replace("abcdefghijklmnopqrstuvwxyz", "");
    console.log(alphabet);
    enabledLetters = false;
  }
  document.getElementById("userInput").value = "";
  generateText();
}

function trackChange(value, thisElement) {

  if (alphabet == "") { return; }

  if (value[value.length - 1] == output[0]) {

    /*
    var fristChar = document.getElementById("firstChar");

    if (fristChar.style.webkitAnimationName !== 'dissapear') {
      fristChar.style.webkitAnimationName = 'dissapear';
      fristChar.style.webkitAnimationDuration = '300ms';

      setTimeout(function () {
        fristChar.style.webkitAnimationName = '';
      }, 300);
    }
    */

    if (thisElement.style.webkitAnimationName !== 'colorchange') {
      thisElement.style.webkitAnimationName = 'colorchange';
      thisElement.style.webkitAnimationDuration = '250ms';

      setTimeout(function () {
        thisElement.style.webkitAnimationName = '';
      }, 250);
    }

    score++;
    scoreHTML.innerHTML = "Score: " + score;

    if (highestScore < score) {
      highestScoreHTML.innerHTML = "Your highest score: " + score;
    }

    randomInt = Math.floor(Math.random() * alphabet.length);

    output = output.slice(1) + alphabet[randomInt];
    console.log(output);

    outputHTML = "<span id=\"firstChar\">" + output[0] + "</span>" + output.slice(1);
    console.log(outputHTML);

    document.getElementById("text").innerHTML = outputHTML;
  }
  /* 
  else {
    if (e.style.webkitAnimationName !== 'colorchangered') {
    e.style.webkitAnimationName = 'colorchangered';
    e.style.webkitAnimationDuration = '250ms';

    // make sure to reset the name after 4 seconds, otherwise another call to colorchange wont have any effect
    setTimeout(function () {
      e.style.webkitAnimationName = '';
    }, 250);
    }
      
    score--;
    document.getElementById("score").innerHTML = "Score: " + score;
  }
   */

}