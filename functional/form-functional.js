let currentQuestionIndex = 0;
const questions = [
  {
    question: "Ваш пол:",
    answers: ["Мужчина", "Женщина"],
  },
  {
    question: "Укажите ваш возраст:",
    answers: ["До 18", "От 18 до 28", "От 29 до 35", "От 36"],
  },
  {
    question: "Выберите лишнее:",
    answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
  },
  {
    question: "Продолжите числовой ряд: 18 20 24 32",
    answers: [62, 48, 74, 57, 60, 77],
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

  const questionContent = document.getElementById("questionContent");
  questionContent.innerHTML = "";

  const questionText = document.createElement("h3");
  questionText.textContent = question.question;
  questionContent.appendChild(questionText);

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
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("nextButton").disabled = true;
  } else {
    document.getElementById("testContainer").innerHTML =
      "<h2>Тест завершен!</h2>";
  }
}
