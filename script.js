/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const quizForm = document.querySelector("#quiz-form");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question-item");
const alertModal = document.querySelector("#alert");

// TODO: 3. Create a submit event listener for the form that does the following.
quizForm.addEventListener("submit", (e) => {
  //    1. Prevent the default behaviour
  e.preventDefault();
  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  const answersArr = Array.from(answers);
  const questionsArr = Array.from(questions);
  //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
  questionsArr.forEach(e=>{
    e.classList.add("incorrect")
    e.classList.remove('correct')
  })
  // questionsArr[ans].classList.add("incorrect");
  // questionsArr[ans].classList.remove("correct");
  //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")

  //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
  //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
  // const check = element.classList.toggle("correct", `ans.value? "correct":"incorrect"`)
  const selectedAns = answersArr.filter((answer) => {
    return answer.checked === true;
  });
  let correctAnsCount = 0
  for (let ans = 0; ans < selectedAns.length; ans++) {
    if (selectedAns[ans].value === "true") {
      questionsArr[ans].classList.add("correct");
      questionsArr[ans].classList.remove("incorrect");
      correctAnsCount++;
    } 
  }
  //    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
  if(correctAnsCount === selectedAns.length) {
    alertModal.classList.add('active')
    setTimeout(() => {
      alertModal.classList.remove('active')
    }, 1000);
  }
});

