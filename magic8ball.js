function askMagic8Ball() {
  // Grab elements
  let questionInput = document.getElementById("question");
  let answerDiv = document.getElementById("answer");
  let askButton = document.getElementById("askButton");

  // Get user input and check if it contains letters
  let userQuestion = questionInput.value;
  let hasLetters = false;

  for (let i = 0; i < userQuestion.length; i++) {
    if (userQuestion[i] !== " ") {
      hasLetters = true;
      break;
    }
  }

  if (!hasLetters) {
    alert("Please enter a question.");
    return;
  }

  // Show "Thinking..." and disable the button
  answerDiv.textContent = "Thinking...";
  answerDiv.className = "thinking"; // Assign a class for animation
  askButton.disabled = true;

  // Function to display the answer
  function displayAnswer() {
    let randomIndex = Math.floor(Math.random() * responses.length);
    let randomResponse = responses[randomIndex];

    // Stop the "thinking" animation
    answerDiv.className = "";

    // Show the answer
    answerDiv.textContent = randomResponse;

    // Reset input and re-enable button
    questionInput.value = "";
    askButton.disabled = false;
  }

  setTimeout(displayAnswer, 1500);

  let inputListener = function (event) {
    if (event.key === "Enter") {
      askMagic8Ball();
    }
  };

  if (!questionInput.enterListenerAttached) {
    questionInput.addEventListener("keydown", inputListener);
    questionInput.enterListenerAttached = true; // Custom flag to prevent multiple listeners
  }
}

let responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",

  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",

  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];
