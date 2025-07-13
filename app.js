const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Dinosaur", correct: false },
        { text: "Giraffe", correct: false },
        { text: "Blue Whale", correct: true },
      ],
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "North America", correct: false },
        { text: "South America", correct: false },
        { text: "Australia", correct: true },
      ],
    },
    {
      question: " what is khushi's name ?",
      answers: [
        { text: "naina", correct: false },
        { text: "Nana pathekr", correct: false },
        { text: "bala ", correct: false },
        { text: "khushi", correct: true },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextBtn = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextBtn.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.style.backgroundColor = "green";
      score++;
    } else {
      selectedBtn.style.backgroundColor = "red";
    }
  
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.style.backgroundColor = "green";
      }
      button.disabled = true;
    });
  
    nextBtn.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerText = "Play Again";
    nextBtn.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();