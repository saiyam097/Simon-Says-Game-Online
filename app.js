let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "blue", "orange"];
let HighScore=[];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function flash(btn) {
    btn.classList.add("btnFlash");
    setTimeout(function() {
        btn.classList.remove("btnFlash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 500);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    flash(randbtn);
}

function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    } else{
        high=level;
        HighScore.push(level);
        for(let i=0;i<HighScore.length;i++){
            if(HighScore[i]> high){
                high=HighScore[i];
            }
            let hc= document.querySelector(".highScore");
            hc.innerText=` Highest Score = ${high}`;
        }



        h2.innerHTML = `Game over <br> Score= <b> ${level}</b> <br> Press any key to start again `;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#D8DAD3";
        },150

        )
       
    }
} 



function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
started=false;
userSeq=[];
gameSeq=[];
level=0;
}
