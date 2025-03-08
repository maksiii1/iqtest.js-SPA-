let currentQuestionIndex = 0;
const questions = [
  {
    question: "Какое число идет следом за 5?",
    answers: ["4", "5", "6", "7"],
    correct: "6",
  },
  {
    question: "Сколько будет 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "Какой цвет смешивается с синим для получения фиолетового?",
    answers: ["Красный", "Зеленый", "Желтый", "Розовый"],
    correct: "Красный",
  },
];

function startTest() {
  document.querySelector(".main").style.display = "none";
  document.querySelector(".container__details").style.display = "none";
  document.querySelector("#testContainer").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("questionNumber").textContent = `Вопрос ${
    currentQuestionIndex + 1
  }`;

  const questionContent = document.getElementById("questionContent");
  questionContent.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-button");
    button.onclick = () => selectAnswer(answer);
    questionContent.appendChild(button);
  });
}

let selectedAnswer = "";

function selectAnswer(answer) {
  selectedAnswer = answer;
  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  if (selectedAnswer === questions[currentQuestionIndex].correct) {
    console.log("Правильный ответ!");
  } else {
    console.log("Неправильный ответ!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("nextButton").disabled = true;
  } else {
    document.getElementById("testContainer").innerHTML =
      "<h2>Тест завершен!</h2>";
  }
}
