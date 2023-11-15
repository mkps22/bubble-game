
function bubble(){
var bubble="";
for(let i=1; i<=160; i++){
    let num=Math.floor(Math.random()*10)
   bubble+=`<div class="bubble">${num}</div>`
}
document.querySelector(".bubst").innerHTML=bubble
}


function btn(){ 
const bts = document.createElement("h1");
     bts.innerHTML="Restart Game"
   document.getElementsByClassName("bubst")[0].appendChild(bts);
 
 }


 let res=document.getElementsByClassName("btn")[0]
res.addEventListener("click",function reload(){
    location.reload()
  
})

// timer for game

timer=60
function settimers(){
    setInterval(function(){
        if(timer>0){
        timer--;
        document.getElementsByClassName("box")[1].innerHTML=timer
       
    }
    else{
       res.style.display="block"

        document.getElementsByClassName("box")[0].innerHTML=""
       
        if(score>=50){
            
            document.getElementsByClassName("bubst")[0].innerHTML=`<h1><span1>  Game Over</span1>Your Score Is <span>${score}</span>  You Have Nice Score.</h1>`

        }
        else{

            document.getElementsByClassName("bubst")[0].innerHTML=`<h1><span1>  Game Over</span1>Your Score Is <span> ${score} </span>  Your Score Is Not Good.</h1>`
        

        }
        if(score>=100){
            document.getElementsByClassName("bubst")[0].innerHTML=`<h1><span1>  Game Over</span1>Your Score Is <span>${score}</span>  You Have Excellent Score.</h1>`
        }
        else{
            if(score<50){
            document.getElementsByClassName("bubst")[0].innerHTML=`<h1><span1>  Game Over</span1>Your Score Is <span> ${score} </span>  Your Score Is Not Good.</h1>`
            
        }
        }
    }
    },1000);
};


// function for hit 
var hit=0
function gethit(){
     hit=Math.floor(Math.random()*10)
    document.getElementsByClassName("box")[0].innerHTML=hit
}


// function for incrementing score



var score=0;
function incscore(){
    score=score+10;
    document.getElementsByClassName("box")[2].innerHTML=score
}

function clickbubble(){
    document.getElementsByClassName("bubst")[0].addEventListener("click",function(num){
       let clicknum=Number(num.target.innerHTML)
       if(clicknum===hit){
        incscore()
        gethit()
        bubble()
       }
    })
}

document.getElementsByClassName("pop")[0].style.display="none"
let close=document.getElementsByClassName("x")[0]
close.addEventListener("click",function closebtn(){
    document.getElementsByClassName("pop")[0].style.display="none"
    document.getElementsByClassName("main")[0].style.filter="blur(0px)"
    document.getElementsByClassName("main")[0].style.backgroundColor="rgb(255, 184, 97)"
    settimers();
    bubble();
    gethit();

})

function disp(){
    document.getElementsByClassName("pop")[0].style.display="block"
    document.getElementsByClassName("main")[0].style.backgroundColor="rgba(0, 0, 0, 0.92)"
    document.getElementsByClassName("box")[0].innerHTML=""
    blr()
    
}

function blr(){
    document.getElementsByClassName("main")[0].style.filter="blur(3px)"
}


let st=setTimeout(disp,200)







// function calling









clickbubble();
