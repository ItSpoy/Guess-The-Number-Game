const hint = document.getElementById("hint");
const noofguessesref = document.getElementById("no-of-guesses");
const guessednumsref = document.getElementById("guessed-nums");
const restartbutton = document.getElementById("restart");
const game = document.getElementById("game");
const guessinput = document.getElementById("guess")
const checkbutton = document.getElementById("check-btn")

let answer , noofguesses, guessednumsarr ;
const play = () =>{
    const userguess = guessinput.value;
    if ( userguess < 1 || userguess > 100 || isNaN(userguess)){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    guessednumsarr.push(userguess);
    noofguesses += 1;
    if ( userguess!= answer){
        if(userguess < answer){
            hint.innerHTML = "Too low. Try Again!";
        }else{
            hint.innerHTML = "Too high. Try Again!";
        }
        noofguessesref.innerHTML = `<span>No. of Guesses : </span> ${noofguesses}`;
        guessednumsref.innerHTML = `<span>Guessed Numbers are  : </span> ${guessednumsarr.join( ","  
        )}`;
        hint.classList.remove("error");
        setTimeout(()=> {
            hint.classList.add("error");
        } , 10);
    }else{
        hint.innerHTML = `Congratulations ! <br>The number was <span> ${answer} </span> . <br> You guessed the number in <span>${noofguesses} </span>tries. `;
        hint.classList.add("success");
        game.style.display="none";
        restartbutton.style.display = "block";
    }
};

const init = ()  => {
    console.log("Game Started");
    answer = Math.floor(Math.random() * 100) +1 ;
    console.log(answer);
    noofguesses = 0;
    guessednumsarr = [];
    noofguessesref.innerHTML = "No. Of Guesses: 0" ;
    guessednumsref.innerHTML = "Guessed Numbers are: None" ;
    guessinput.value = "";
    hint.classList.remove("success" , "error");
};
guessinput.addEventListener("keydown" , (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        play();
    }
});
restartbutton.addEventListener("click" , () =>{
    game.style.display = "grid" ;
    restartbutton.style.display = "none" ;
    hint.innerHTML ="" ;
    hint.classList.remove("success");
    init();
});

checkbutton.addEventListener("click" , play);
window.addEventListener("load", init);
