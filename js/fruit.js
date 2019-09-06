document.getElementById("Start").addEventListener("click",spin)

function spin(){
    let final = []
    final.push(spinReel("r1"))
    final.push(spinReel("r2"))
    final.push(spinReel("r3"))
    
}    


function spinReel(reel){
    let i = Math.floor(Math.random()*6)
    if (i == 0){
        document.getElementById(reel).src = "images/Cherry.png"
    }
    if (i == 1){
        document.getElementById(reel).src = "images/Grapes.png"
    }
    if (i == 2){
        document.getElementById(reel).src = "images/Lemon.png"
    }
    if (i == 3){
        document.getElementById(reel).src = "images/Orange.png"
    }
    if (i == 4){
        document.getElementById(reel).src = "images/Strawberry.png"
    }
    if (i == 5){
        document.getElementById(reel).src = "images/Watermelon.png"
    }
}


