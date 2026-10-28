let question = 1;
let score = 0;

function showQuestion() {
  document.getElementById("scoreText").innerHTML = "Interview score: " + score + " / 3";

  if (question <= 3) {
    document.getElementById("progress").innerHTML = "Question " + question + " / 3";

    if (question === 1) {
      document.getElementById("questionText").innerHTML = "Can you stay in one place for eight hours?";
      document.getElementById("firstAnswer").innerHTML = "Yes. I have 300 years of practice.";
      document.getElementById("secondAnswer").innerHTML = "No. I might roll away.";
    } else if (question === 2) {
      document.getElementById("questionText").innerHTML = "What will you do if the papers start flying?";
      document.getElementById("firstAnswer").innerHTML = "Sit on them.";
      document.getElementById("secondAnswer").innerHTML = "Watch them leave.";
    } else {
      document.getElementById("questionText").innerHTML = "When can you start?";
      document.getElementById("firstAnswer").innerHTML = "Now. I am already sitting here.";
      document.getElementById("secondAnswer").innerHTML = "After my next 300-year nap.";
    }
  } else {
    showResult();
  }
}

function chooseFirstAnswer() {
  if (question <= 3) {
    score = score + 1;
    question = question + 1;
    showQuestion();
  }
}

function chooseSecondAnswer() {
  if (question <= 3) {
    question = question + 1;
    showQuestion();
  }
}

function showResult() {
  document.getElementById("progress").innerHTML = "Interview complete";
  document.getElementById("answers").style.display = "none";

  if (score === 3) {
    document.getElementById("questionText").innerHTML = "Hired: full-time paperweight!";
    document.getElementById("resultText").innerHTML = "3 / 3: You passed every question. Your job is to sit on papers. Finally, a reason to do nothing.";
    document.getElementById("interview").style.backgroundColor = "lightgreen";
  } else if (score === 2) {
    document.getElementById("questionText").innerHTML = "Hired: intern rock!";
    document.getElementById("resultText").innerHTML = "2 / 3: You need a little practice. Your first task is to hold one sticky note. Your salary is dirt.";
    document.getElementById("interview").style.backgroundColor = "lightyellow";
  } else {
    document.getElementById("questionText").innerHTML = "Not hired: back to the roadside.";
    document.getElementById("resultText").innerHTML = "0-1 / 3: Not enough suitable answers. The papers need someone more reliable. At least the ground is free.";
    document.getElementById("interview").style.backgroundColor = "mistyrose";
  }
}

function restartInterview() {
  question = 1;
  score = 0;
  document.getElementById("answers").style.display = "block";
  document.getElementById("resultText").innerHTML = "";
  document.getElementById("interview").style.backgroundColor = "whitesmoke";
  showQuestion();
}

document.getElementById("firstAnswer").addEventListener("click", chooseFirstAnswer);
document.getElementById("secondAnswer").addEventListener("click", chooseSecondAnswer);
document.getElementById("restartButton").addEventListener("click", restartInterview);

showQuestion();
