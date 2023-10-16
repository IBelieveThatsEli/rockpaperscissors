const rock_computer = document.querySelector(".rock_computer")
const paper_computer = document.querySelector(".paper_computer")
const scissors_computer = document.querySelector(".scissors_computer")

function generateCompChoice()
{
    const ran = Math.floor(Math.random() * 3) + 1
    switch(ran)
    {
        case 1:
            rock_computer.style.backgroundColor = "blue"
            setTimeout(function() {
                rock_computer.style.backgroundColor = "";
            }, 500)
            break
        case 2:
            paper_computer.style.backgroundColor = "blue"
            setTimeout(function() {
                paper_computer.style.backgroundColor = "";
            }, 500)
            break
        case 3:
            scissors_computer.style.backgroundColor = "blue"
            setTimeout(function() {
                scissors_computer.style.backgroundColor = "";
            }, 500)
            break
    }
}

const rock = document.querySelector(".rock_player")

rock.addEventListener("click", (event) => {
    rock.style.backgroundColor = "red";
    setTimeout(function() {
        rock.style.backgroundColor = "";
    }, 500)
    generateCompChoice()
})

const paper = document.querySelector(".paper_player")

paper.addEventListener("click", (event) => {
    paper.style.backgroundColor = "red";
    setTimeout(function() {
        paper.style.backgroundColor = "";
    }, 500)
    generateCompChoice()
})

const scissors = document.querySelector(".scissors_player")

scissors.addEventListener("click", (event) => {
    scissors.style.backgroundColor = "red";
    setTimeout(function() {
        scissors.style.backgroundColor = "";
    }, 500)
    generateCompChoice()
})

