const riddles = [
  {
      question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      answer: "echo",
      hints: ["Hint: It is a sound.", "Hint: It bounces back.", "Hint: It happens in empty spaces."]
  },
  {
      question: "The more you take, the more you leave behind. What am I?",
      answer: "footsteps",
      hints: ["Hint: Think about walking.", "Hint: You leave them behind.", "Hint: Detectives look for these."]
  },
  {
      question: "I'm not alive, but I can grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?",
      answer: "fire",
      hints: ["Hint: It produces heat.", "Hint: It spreads.", "Hint: It burns things."]
  }
];

let currentRiddle = 0;
let score = 0;
let hintIndex = 0;

function startGame() {
  currentRiddle = 0;
  score = 0;
  nextRiddle();
}

function nextRiddle() {
  if (currentRiddle >= riddles.length) {
      document.getElementById("riddle-text").innerText = "Game Over! Final Score: " + score;
      return;
  }

  document.getElementById("riddle-text").innerText = riddles[currentRiddle].question;
  document.getElementById("user-answer").value = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("hint-text").innerText = "";
  hintIndex = 0;
}

function checkAnswer() {
  let userAnswer = document.getElementById("user-answer").value.toLowerCase().trim();
  let correctAnswer = riddles[currentRiddle].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
      document.getElementById("feedback").innerText = "🎉 Correct!";
      document.getElementById("feedback").style.color = "green";
      score++;
      document.getElementById("score").innerText = score;
      currentRiddle++;
  } else {
      document.getElementById("feedback").innerText = "❌ Incorrect! Try again.";
      document.getElementById("feedback").style.color = "red";
  }
}

function getHint() {
  if (hintIndex < riddles[currentRiddle].hints.length) {
      document.getElementById("hint-text").innerText = riddles[currentRiddle].hints[hintIndex];
      hintIndex++;
  } else {
      document.getElementById("hint-text").innerText = "No more hints available!";
  }
}

startGame();
