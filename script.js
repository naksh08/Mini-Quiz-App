const quizForm = document.querySelector("#quiz-form");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question-item");
const alertModal = document.querySelector("#alert");

quizForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const questionsArr = Array.from(questions);
  questionsArr.forEach(e=>{
    e.classList.add("incorrect")
    e.classList.remove('correct')
  })

  const answersArr = Array.from(answers);

  const checkedAns = answersArr.filter( ans=> ans.checked)
  console.log(checkedAns)
  checkedAns.forEach(answer => {
    const questionItem = answer.closest(".question-item")
    console.log(questionItem)
    const isCorrect = answer.value === 'true'
    if(isCorrect){
      questionItem.classList.add('correct')
      questionItem.classList.remove('incorrect')
    }
     
  });
  
  const allTrue = checkedAns.every(answer => answer.value === 'true')
  const allAnswered = checkedAns.length === questions.length

  if(allTrue && allAnswered) {
    alertModal.classList.add('active')
    setTimeout(() => {
      alertModal.classList.remove('active')
    }, 1000);
  }
});

