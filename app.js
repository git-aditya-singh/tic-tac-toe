let boxes=document.querySelectorAll(".box");
let rstbttn=document.querySelector("#rst-bttn");
let newGamebttn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let currPlayer='X';

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=()=>{
    msg.innerText=`Congratulations winner is ${currPlayer}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const announceDraw=()=>{
    msg.innerText="Game is draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        box.innerText=currPlayer;
        box.disabled=true;
        checkWinner();
        currPlayer=currPlayer==='X'?'O':'X';
    });
});
let checkDraw=()=>{
    let count=0;
    for(box of boxes){
        if(box.innerText=='X' || box.innerText=='O'){
            count++;
        }
    }
    if(count==9){
        announceDraw();
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!='' && pos2val!='' &&pos3val!=''){
            if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText&&boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
                showWinner();
           }
        }
    }  
    checkDraw();
}
const resetGame=()=>{
    currPlayer='X';
    enableBoxes();
    msgContainer.classList.add("hide");
}
rstbttn.addEventListener("click",resetGame);
newGamebttn.addEventListener("click",resetGame);

