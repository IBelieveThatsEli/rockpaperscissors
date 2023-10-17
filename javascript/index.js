const buttons = document.querySelectorAll(".user_choice")
let user_score = 0;

const comp_choices = document.querySelectorAll("button")
let comp_score = 0;

const title = document.querySelector("h1")

const scores = document.querySelectorAll("h4")

function generateRandomChoice(userChoice)
{
    let ran = Math.floor(Math.random() * 3)
    
    comp_choices[ran + 3].classList.add("active")
    setTimeout(function() {
        comp_choices[ran + 3].classList.remove("active")
    }, 500)

    let beats = userChoice - 1
    if (beats < 0)
        beats = 2
    let looses = userChoice + 1
    if (looses > 2)
        looses = 0
    if (ran == beats)
    {
        title.textContent = "Player Wins!"
        user_score++;
    } else if(ran == looses)
    {
        title.textContent = "Computer Wins!"
        comp_score++;
    } else {
        title.textContent = "Draw!"
    }
    scores[0].textContent = "Score: " + user_score
    scores[1].textContent = "Score: " + comp_score

}

buttons[0].addEventListener("click", function() {
    let user_choice = 0;
    generateRandomChoice(user_choice)
})

buttons[1].addEventListener("click", function() {
    let user_choice = 1;
    generateRandomChoice(user_choice)
})

buttons[2].addEventListener("click", function() {
    let user_choice = 2;
    generateRandomChoice(user_choice)
})
