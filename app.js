var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100 + 1);
var number_of_guesses = 0;
var guessed_nums = [];

function play() {
  var user_guess = document.getElementById("guess").value;

  guessed_nums.push(user_guess);
  number_of_guesses++;
  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    if (user_guess < answer) {
      msg1.textContent = "Your guess is  low";
      msg2.textContent = "Number of guesses " + number_of_guesses;
      msg3.textContent = "Guessed numbers are : " + guessed_nums;
    } else if (user_guess > answer) {
      msg1.textContent = "Your guess is  high";
      msg2.textContent = "Number of guesses " + number_of_guesses;
      msg3.textContent = "Guessed numbers are : " + guessed_nums;
    } else if (user_guess == answer) {
      msg1.textContent = "You win";
      msg2.textContent = "The Number was : " + answer;
      msg3.textContent = "You guessed it in " + number_of_guesses + " guesses";
    }
  }
}

console.log(answer);
