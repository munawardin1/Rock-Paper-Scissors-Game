let userScoreCount = 0;
let compScoreCount = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg")
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".computer-score");

// TO generate computer choice
const compGenChoice=()=>{

    const options = ["paper","scissor","rock"]
    const randomInx = Math.floor(Math.random()*3);
    return options[randomInx];
}
// Draw Game 
const gameDraw=()=>{
    msg.innerText = "Game was Draw. Try Again! "
    msg.style.backgroundColor = '#081b31'
    
}
// To Show Who is winning
const showWinner=(userWin,userChoice ,computerChoice)=>{
    if(userWin===true){
       msg.innerText = `Wow! You win. Your ${userChoice} beats the ${computerChoice}`
       msg.style.backgroundColor = 'green'
       userScoreCount++;
       userScore.innerText=userScoreCount;
    }
    else {
        msg.innerText = `Oh! You Loose. ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
        compScoreCount++;
        compScore.innerText=compScoreCount;
    }
}
// PlayGame Function
const playGame=(userChoice)=>{     
    const computerChoice = compGenChoice();
    if(userChoice===computerChoice){
    gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper computer choices
            userWin = computerChoice === "paper" ? false:true
        }
        else if(userChoice === "paper"){
              //rock , scissor computer choices
            userWin = computerChoice === "rock" ? true : false
        }
        else{
              //rock , paper computer choices
            userWin = computerChoice === "paper" ? true :  false
        }
        showWinner(userWin , userChoice ,computerChoice);
    } 

}
// To Track each Choice by using their Id
choices.forEach((choice) =>{
 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
    })
})

