import { Question } from "./question.js";
import Quiz from "./quiz.js";

//  html elements 
const CategorySelect = document.getElementById('CategorySelect');
const levelSelect = document.getElementById('levelSelect');
const questionNumber = document.getElementById('questionNumber');
const startbtn = document.getElementById('startBtn');

const quizForm = document.getElementById('quizForm');
export const result = document.getElementById('result');

// console.log(CategorySelect ,levelSelect ,questionNumber ,startbtn);

//  variables 
export let questions = []
export let myQuiz = []


// عشان ناخد البيانات 
startbtn.addEventListener("click" , async function () {
    const category = CategorySelect.value;
    const level =levelSelect.value;
    const number =questionNumber.value;

    console.log(category , level , number);
// هنروح علي ال quiz


    myQuiz = new Quiz(category , level , number);
    questions = await myQuiz.getQuiz(); // ده هيبعتلي ال questions // هنحليها global
    quizForm.classList.add("d-none")
    
    const firstQuestion = new Question(0)
    firstQuestion.displayQuestion()

    console.log(questions);
    

    
})
