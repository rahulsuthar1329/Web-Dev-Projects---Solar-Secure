QuestionSection = [
  {
    question: "Que 1 : What is HTML stands for?",
    a: "Hyper Tag Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hyperlinks Text Markup Language",
    d: "None of the above",
    answer: "opt2",
  },
  {
    question: "Que 2 : What is CSS stands for?",
    a: "Cascading Style Sheets",
    b: "Coloured Special Sheets",
    c: "Color and Style Sheets",
    d: "None of the above",
    answer: "opt1",
  },
  {
    question:
      "Que 3 : What type of CSS is generally recommended for designing large web pages?",
    a: "Inline",
    b: "Internal",
    c: "External",
    d: "None of the above",
    answer: "opt3",
  },
  {
    question: "Que 4 : How can we select an element with a specific ID in CSS?",
    a: "#",
    b: ".",
    c: "^",
    d: "*",
    answer: "opt1",
  },
];

const qnaSection = document.querySelector(".qna");
const question = document.getElementById("question");
const val1 = document.getElementById("value1");
const val2 = document.getElementById("value2");
const val3 = document.getElementById("value3");
const val4 = document.getElementById("value4");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const answers = document.querySelectorAll(".answer");
const submit = document.getElementById("submit");
const showScore = document.getElementById("showScore");

let countQuestion = 0;
let score = 0;

const loadQuestion = () => {
  question.innerText = QuestionSection[countQuestion].question;
  val1.innerText = QuestionSection[countQuestion].a;
  val2.innerText = QuestionSection[countQuestion].b;
  val3.innerText = QuestionSection[countQuestion].c;
  val4.innerText = QuestionSection[countQuestion].d;
};

loadQuestion();

const getCheckAnswer = () => {
  let ans;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      ans = curAnsElem.id;
    }
  });
  return ans;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  //   console.log(checkedAnswer);

  if (checkedAnswer == QuestionSection[countQuestion].answer) {
    score++;
  }

  countQuestion++;

  deselectAll();

  if (countQuestion < QuestionSection.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3>You scored ${score}/${QuestionSection.length} ✌️</h3> 
      <button class='btn' onclick="location.reload()">Once More</button>
    `;

    showScore.classList.remove("scoreArea");
    submit.style.display = "none";
  }
});
