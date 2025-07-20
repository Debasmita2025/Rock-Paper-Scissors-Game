let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame= () =>{
  
  msg.innerText="Game Draw, Try again!";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
}

const showWinner= (userWin, userChoice, compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText= userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText=`You Lose...${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
}

const playGame = (userChoice) => {
  console.log("User Choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp Choice =", compChoice);

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if (userChoice === "Rock"){
      userWin = compChoice === "Paper" ? false : true;
    }else if(userChoice === "Paper"){
      userWin = compChoice === "Scissors" ? false : true;
    }else{
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});