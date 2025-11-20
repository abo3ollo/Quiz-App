import { myQuiz, questions, result } from "./index.js";

export class Question {
  constructor(index) {
    this.index = index;
    this.questionText = questions[index].question;
    this.correctAnswer = questions[index].correct_answer;
    this.incorrectAnswers = questions[index].incorrect_answers;
    this.category = questions[index].category;
    this.allAnswers = this.getAllAnswers();
    this.answered = false;
  }

  getAllAnswers() {
    return this.incorrectAnswers.concat(this.correctAnswer).sort();
  }

  displayQuestion() {
    const questionHtml = `<div class="quiz-container">
                        <div class="quiz-header d-flex justify-content-between align-items-center text-center mb-4">

                            <div class="quiz-title">${this.category}</div>
                            <div class="question-num py-3">${
                              this.index + 1
                            } of ${questions.length}</div>
                        </div>
                        
                        <div class="question">${this.questionText}</div>
                        
                        <div class="options-grid">
                            ${this.allAnswers
                              .map((answer) => {
                                return `<div class="option">${answer}</div>`;
                              })
                              .join("")}
                        </div>
                        
                        <div class="score-container">
                            <div class="score-label">SCORE </div>
                            <div class="score-value"> -${myQuiz.score}-</div>
                        </div>
                    </div> `;

    result.innerHTML = questionHtml;

    const choices = document.querySelectorAll(".options-grid .option");
    choices.forEach((choice) => {
      choice.addEventListener("click", (e) => {
        this.checkAnswer(e);
      });
    });
  }

  checkAnswer(e) {
    // console.log(e.target);
    if (!this.answered) {
      this.answered = true;

      if (this.correctAnswer === e.target.innerHTML) {
        e.target.classList.add("correct");
        myQuiz.score++;
      } else {
        e.target.classList.add("wrong");
      }
      this.waitAnswer()
    }
  }

  getNextQuestion() {
    this.index++
    if (this.index < questions.length) {
      const nextQuestion = new Question(this.index)
      nextQuestion.displayQuestion()
      
    }
     else {
      result.innerHTML =`<div class="quiz-container">
                        <p class="fs-5 my-2">Nice try!</p>
                        <h2 class="mb-4">Your final score is ${myQuiz.score} of ${questions.length}</h2>
                        <button class="btn btn-dark py-2 w-25 fw-bolder mb-4" id="tryAgainBtn">Try Again</button>
                    </div> `

                    const tryAgainBtn =document.getElementById("tryAgainBtn")
                    tryAgainBtn.addEventListener("click",function () {
                      window.location.reload()
                      
                    })
    }
  }

  waitAnswer() {
    setTimeout(() => {
      this.getNextQuestion();
    }, 1000);
  }
}
