const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
questions.forEach((question,index)=>{
    question.addEventListener("click",()=>{
        answers.forEach(answer=>{
            answer.classList.add("answer");
            answer.classList.remove("answer-active");
        });
        let activeAnswer = answers[index];
        if(activeAnswer.classList.contains("answer")){
            activeAnswer.classList.add("answer-active");
            activeAnswer.classList.remove("answer"); 
        }
    });
});