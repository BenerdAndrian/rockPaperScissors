let humanScore=0;
let computerScore=0;
let round=0;
const scoreDisplayUI=document.querySelector("#scoreRound");
const buttonUI=document.querySelectorAll(".button");
const roundNumberDisplayUI=document.querySelector("#round");
const message=document.createElement("p");
message.setAttribute("id","message");
const body=document.querySelector("#rps");
const battle=document.getElementById("matchGame");
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
    const div=document.createElement("div");
    div.setAttribute("class","result");
    round++;
    roundNumberDisplayUI.children[0].textContent= `${round}`;
  if(round<=5){
    const computerChoiceOption=computerChoice();
    let result='';
    //Logic
    if(humanChoice==="rock"){
      if(computerChoiceOption==="rock"){
          result="you both tie this round";
      }else if(computerChoiceOption==="paper"){
          result="Computer wins this round";
          computerScore++;
      }else if(computerChoiceOption==="scissors"){
          result="you win this round";
          humanScore++;
      }
    }
    else if(humanChoice==="paper"){
      if(computerChoiceOption==="rock"){
          result="you win this round";
          humanScore++;
      }else if(computerChoiceOption==="paper"){
          result="you both tie this round";
      }else if(computerChoiceOption==="scissors"){
          result="Computer wins this round";
          computerScore++;
      }
    }
    else if(humanChoice==="scissors"){
      if(computerChoiceOption==="rock"){
          result="Computer wins this round";
          computerScore++;
      }else if(computerChoiceOption==="paper"){
          result="you win this round";
          humanScore++;
      }else if(computerChoiceOption==="scissors"){
          result="you both tie this round";
      }
    }
    battle.children[0].src=`res/${humanChoice}.jpg`;
    battle.children[2].src=`res/${computerChoiceOption}.jpg`;
    message.textContent=result;
    body.insertBefore(message,document.getElementById("imgChoiceList"));
    scoreDisplayUI.children[0].textContent=humanScore;
    scoreDisplayUI.children[1].textContent=computerScore;
    if(round===5){
        if(humanScore>computerScore){
            div.innerText="YOU WIN THE GAME!!."
        }else if(humanScore<computerScore){
            div.innerText="COMPUTER WINS THE GAME!!."
        }else{
            
            div.innerText="TIE THIS GAME!!."
            
        }
        message.appendChild(div);
        playNewGame();
    }
  }
}

function playNewGame(){
 buttonUI.forEach(button=>{
    button.style.opacity="0.6";
    button.style.cursor="unset";
    button.onclick=null;
 })
 replay();
 }
 
replay();
function replay(){
    const firstChildScore=scoreDisplayUI.children[0];
    const secondChildScore=scoreDisplayUI.children[1];
    const firstChildRoundNumberDisplay=roundNumberDisplayUI.children[0];
    const replayButton=document.querySelector(".replayButton");
    replayButton.addEventListener("click",function(){
        battle.children[0].src="";
        battle.children[2].src="";
        buttonUI.forEach(button=>{
            button.style.opacity="unset";
            button.style.cursor="pointer";
         })

        firstChildScore.textContent="0";
        secondChildScore.textContent="0";
        firstChildRoundNumberDisplay.textContent="0";
        humanScore=0;
        computerScore=0;
        round=0;
        message.textContent="";
        buttonUI[0].onclick=function(){
            pickAChoose("rock");
            }
            buttonUI[1].onclick=function(){
            pickAChoose("paper")
            }
            buttonUI[2].onclick=function(){
            pickAChoose("scissors")
            }   
     })
        
}
