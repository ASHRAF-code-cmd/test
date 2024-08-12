let x=0;
let y=0;

const choice=document.querySelectorAll(".x");
const msg = document.querySelector("#msg");

const aiscore= document.querySelector("#o");
const uscore= document.querySelector("#y");


const compchoice = () => {
    const options = ['ROCK','PAPER','SCISSORS'];
    const randomidx=Math.floor(Math.random () * 3);
    return options[randomidx];
};

const drawgame = () => {
    msg.innerText = 'Game was draw';
    msg.style.backgroundColor='orange';
}

const showwinner = (userwin,userchoice,ai) => {
    if(userwin){
       x++;
       uscore.innerText=x;
       msg.innerText = `you won your ${userchoice} beats ${ai}`;
       msg.style.backgroundColor='GREEN';
    }else{
       y++;
       aiscore.innerText=y;
        msg.innerText =` you lost  ${ai} beats your ${userchoice}`;
        msg.style.backgroundColor='RED';
     
    }
}

const playgame = (userchoice) => {
    console.log('user choice is ',userchoice);
    const ai = compchoice(); 
    console.log('comp choice is', ai);

    if(userchoice === ai){
      drawgame();
    } 
    else
    { 
        let userwin=true;
        if(userchoice==='ROCK'){
            //paper,scissor
            userwin = ai==='PAPER'? false : true;

        } else if (userchoice==='PAPER'){
            //rock,scissor
            userwin= ai=== 'SCISSORS'? false:true;
        }else{
            //rock,paper
            userwin = ai ==='ROCK'? false:true;
        }
        showwinner(userwin,userchoice,ai);
    } 
}
choice.forEach((x)=>{
    x.addEventListener("click",() => {
    const userchoice=x.getAttribute("id");
    playgame(userchoice);    
    
  
   
    });

});  

