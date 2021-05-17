const javaScriptQuizContainer = document.getElementById('javaScriptQuiz');
const yourScoreContainer = document.getElementById('yourScore');
const submitButton = document.getElementById('submit');

function javaScriptQuiz(){
  // variable to stroe the HTML output
  const output = [];
}

function yourScore(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', yourScore);

const JavaQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<javascript>",
      b: "<js>",
      c: "<scripting>",
      d: "<script>",
    },
    correctAnswer: "d"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "function:myFunction()",
      b: "function myFunction()",
      c: "function = myFunction()",
      d: "function myFunction{}",
    },
    correctAnswer: "b"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
      a: "if i = 5",
      b: "if i = 5 then",
      c: "if (i == 5)",
      d: "if i == 5 then",
    },
    correctAnswer: "c"
  },
  {
    question: "How does a FOR loop start?",
    answers: {
      a: "for (i = 0; i <= 5; i++)  ",
      b: "for i = 1 to 5",
      c: "for (i = 0; i <= 5)",
      d: "for (i <= 5; i++)",
    },
    correctAnswer: "a"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: {
      a: "click",
      b: "onmouseclick",
      c: "onclick",
      d: "click-on",
    },
    correctAnswer: "c"
  }
];
