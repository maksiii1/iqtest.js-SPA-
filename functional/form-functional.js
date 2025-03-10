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
  // {
  //   question: "Выберите цвет, который сейчас наиболее вам приятен:",
  //   answer: [
  //     "rgb(168, 168, 168)",
  //     "rgb(0, 0, 169)",
  //     "rgb(0, 167, 1)",
  //     "rgb(246, 1, 0)",
  //     "rgb(253, 255, 25)",
  //     "rgb(169, 84, 3)",
  //     "rgb(0, 0, 0)",
  //     "rgb(133, 0, 104)",
  //     "rgb(70, 178, 172)",
  //   ],
  // },
  // {
  //   question:
  //     "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
  //   answer: [
  //     rgb(168, 168, 168),
  //     rgb(0, 0, 169),
  //     rgb(0, 167, 1),
  //     rgb(246, 1, 0),
  //     rgb(253, 255, 25),
  //     rgb(169, 84, 3),
  //     rgb(0, 0, 0),
  //     rgb(133, 0, 104),
  //     rgb(70, 178, 172),
  //   ],
  // },
  {
    question: "Какой из городов лишний?",
    answers: ["Вашингтон", "Лондон", "Париж", "Нью-Йорк", "Москва", "Оттава"],
  },
  {
    question: "Выберите правильную фигуру из четырёх пронумерованных.",
    answers: [1, 2, 3, 4],
  },
  {
    question: "Вам привычнее и важнее:",
    answers: [
      "Наслаждаться каждой минутой проведенного времени",
      "Быть устремленными мыслями в будущем",
      "Учитывать в ежедневной практике прошлый опыт",
    ],
  },
  {
    question:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
    answers: [
      "Оно остроконечное",
      "Оно устойчиво",
      "Оно - находится в состоянии равновесия",
    ],
  },
  {
    question: "Вставьте подходящее число",
    answers: [34, 36, 53, 44, 66, 42],
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
    button.classList.add("answer-button");

    const circle = document.createElement("span");
    circle.classList.add("circle");

    const text = document.createElement("span");
    text.textContent = answer;

    button.appendChild(circle);
    button.appendChild(text);

    button.onclick = () => selectAnswer(button, circle, answer);
    questionContent.appendChild(button);
  });

  updateProgress();
}

function selectAnswer(button, circle, answer) {
  const buttons = document.querySelectorAll(".answer-button");
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
    const circle = btn.querySelector(".circle");
    circle.style.backgroundColor = "white";
  });

  button.classList.add("selected");
  circle.style.backgroundColor = "blue";

  document.getElementById("nextButton").disabled = false;
  selectedAnswer = answer;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById("nextButton").disabled = true;

    const progressBar = document.getElementById("progressBar");
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
  } else {
    document.getElementById("testContainer").innerHTML =
      "<div>Обработка результатов</div>";
  }
}

function updateProgress() {
  const progressBar = document.querySelector(".test-header__progress-bar");
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}
