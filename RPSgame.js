let humanScore=0;
let computerScore=0;
const scoreDisplayUI=document.querySelector("#scoreRound");
const buttonUI=document.querySelectorAll(".button");
const roundNumberDisplayUI=document.querySelector("#round");

function computerChoice(){
    let computerChoosing=Math.random();
     
    if(computerChoosing<=1/3){
       computerChoosing="rock";
    }else if(computerChoosing<=2/3){
        computerChoosing="paper";
    }else if(computerChoosing<=1){
        computerChoosing="scissors";
}

    return computerChoosing;
}

function pickAChoose(humanChoice){
  const computerChoice=computerChoice();
  let result='';
  //Logic
  if(humanChoice==="rock"){
    if(computerChoice==="rock"){
        result="you both tie this round";
    }else if(computerChoice==="paper"){
        result="Computer wins this round";
        computerScore++;
    }else if(computerChoice==="scissors"){
        result="you win this round";
        humanScore++;
    }
  }
  else if(humanChoice==="paper"){
    if(computerChoice==="rock"){
        result="you win this round";
        humanScore++;
    }else if(computerChoice==="paper"){
        result="ou both tie this round";
    }else if(computerChoice==="scissors"){
        result="Computer wins this round";
        computerScore++;
    }
  }
  else if(humanChoice==="scissors"){
    if(computerChoice==="rock"){
        result="Computer wins this round";
        computerScore++;
    }else if(computerChoice==="paper"){
        result="you win this round";
        humanScore++;
    }else if(computerChoice==="scissors"){
        result="you both tie this round";
    }
  }
  return result;
}

function playNewGame(){
 const firstChildScore=scoreDisplayUI.children[0];
 const secondChildScore=scoreDisplayUI.children[1];
 const firstChildRoundNumberDisplay=roundNumberDisplayUI.children[0];
 firstChildScore.textContent="0";
 secondChildScore.textContent="0";
 firstChildRoundNumberDisplay.textContent="0";
 buttonUI.forEach(button=>{
    button.textContent="REPLAY"
 })

}