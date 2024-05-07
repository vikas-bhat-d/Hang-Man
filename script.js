function insertDiv(item){
    const newdiv=document.createElement('div')
    newdiv.innerHTML=`<div class="front">_</div><div class="back">${item}</div>`;
    newdiv.setAttribute("class",'letter')
    document.querySelector('.letters').appendChild(newdiv)
}

function removeDiv(){
    const div_remove=document.querySelector('.letters')
    if(div_remove.lastElementChild!=null)
        div_remove.removeChild(div_remove.lastElementChild)

}

function pickRandomWord(wordlist){
    let word_index;
    word_index=Math.floor(Math.random()*(wordlist.length));
    return wordlist[word_index].toUpperCase();
}

function displayState(guessesLeft){
    const part=document.getElementsByClassName(guessesLeft)
    if(guessesLeft!="6")
        part[0].style.fill='rgb(96, 94, 94)'
    part[0].style.stroke='rgb(96, 94, 94)'        
}

function resetState(){
    for (let i = 1; i < 6; i++) {
        let part=document.getElementsByClassName(i.toString());
        if(part!=undefined){
            if(i!=6)
            part[0].style.fill='#373737'
        part[0].style.stroke='#373737'
    }
    }
}

function displayLetterBox(){
    for(let i=0;i<word.length;i++){
        insertDiv(word[i]);
    }
}
function displayProblem(){
    for(let i=0;i<word.length;i++){
        if(word[i].charCodeAt()>90 || word[i].charCodeAt()<65)
        {
            flip(i);
            shown_index.push(i);
        }
    }
    if(word.length<=6){
        n=Math.floor(Math.random()*((word.length/1.8)-2)+2)
    }
    else{
        n=Math.floor(Math.random()*((word.length/1.8)-3)+3)
    }

    let index;
    for (let i = 0; i < n && shown_index.length!=word.length; i++) {
        do{
            index=Math.floor(Math.random()*word.length)
        }while(shown_index.includes(index))
        flip(index); 
        shown_index.push(index);
    }
    
    
}

function flip(n){
    const letters=document.querySelector(".letters")
    letters.children[n].setAttribute('style',"transform:rotateY(180deg)")
}
function indexesOf(letter){
    for(let i=0;i<word.length;i++){
        if(letter==word[i] && !shown_index.includes(i))
            return i;
    }
    return -1;
}

function evaluateGuess(guess){
    let key=0;
    if(guess.length==1){
        if(word.includes(guess)){
            while(true){
                index=indexesOf(guess)
                if(index>=0){
                key=1;
                flip(index)
                shown_index.push(index);
            }
            else
            break;
        
    }
        }    
    }
    else if(guess.length==word.length){
        if(guess==word){
            key=1
            for (let i = 0; i < word.length; i++) {
                if(!shown_index.includes(i)){
                    flip(i)
                    shown_index.push(i);
                }
            }
        }
    }
    else
    key=-1
return key;
}

function shake(){
    const input_field=document.querySelector('.input-text')
    input_field.setAttribute('style',"animation:shake 0.38s")
    setTimeout(()=>{
        input_field.removeAttribute('style');
    },400)
}

function takeGuess(guess){
    if(guess!=''){
        key=evaluateGuess(guess)
        if(key==0){
            writePrompt("incorrectGuess")
            wrongGuess.innerHTML=`${wrongGuess.innerHTML}  ${guess}`
            displayState(guessesLeft)
            guessesLeft=guessesLeft-1
            shake();
        }
        else if(key==-1){
            writePrompt("InvalidGuess")
            shake();
        }
    }
    else{
        writePrompt("InvalidGuess")
        shake();
    }
}


function writePrompt(msg){
    document.querySelector('.prompt-text').innerHTML=msg;
}

function endGame(){
    input.setAttribute('disabled','')
    play_button.innerHTML='<p>Play Again<\p>'
    play_button.style.visibility='visible'
    wrongGuess.innerHTML='wrongGuesses: '
    wrongGuess.style.visibility='hidden'
    saveCount();
    getCount();
    updateCount();
}
function updateCount(){
    document.querySelector('#won').innerHTML=`Won: ${Resultdata.won}`
    document.querySelector('#lost').innerHTML=`Lost: ${Resultdata.lost}`
}

function getCount(){
    if(localStorage.getItem("won") && localStorage.getItem("lost")){
    Resultdata.won=parseInt(localStorage.getItem("won"))
    Resultdata.lost=parseInt(localStorage.getItem("lost"))
    }
}

function saveCount(){
    // localStorage.setItem("data",document.querySelector('.stored-result').innerHTML)
    localStorage.setItem("won",Resultdata.won)
    localStorage.setItem("lost",Resultdata.lost)

}

function main(){
    getCount();
    updateCount();
    input.addEventListener("keydown",(e)=>{
        writePrompt('')
        if(e.key=='Enter'){
            takeGuess(input.value.toUpperCase())
            input.value='';
            if(shown_index.length==word.length){
                result.innerHTML='YOU WIN';
                result.style.visibility='visible'
                Resultdata.won+=1;
                endGame();
            }
            else if(guessesLeft==0)
            {
                result.innerHTML='YOU LOOSE';
                result.style.visibility='visible';
                writePrompt(`Word was: ${word}`)
                Resultdata.lost+=1;
                endGame();
            }
        }
    })
    
    
    play_button.addEventListener('click',(e)=>{
        play_button.style.visibility='hidden'
        wrongGuess.style.visibility='visible'
        resetState();
        writePrompt('');
        result.style.visibility='hidden'
        guessesLeft=6;
        shown_index=[];
        document.querySelector('.letters').innerHTML=''
        input.removeAttribute('disabled');
        word=pickRandomWord(wordlist)
        displayLetterBox(word);
        setTimeout(()=>{
            displayProblem();
        },300)

    })
    
    
    start_button.addEventListener('click',start=(e)=>{
        start_button.style.visibility='hidden';
        start_button.removeEventListener('click',start,false);
    },false)
}


let wordlist=[];
let shown_index=[]
let guessesLeft=6
const input=document.querySelector('.input-text')
const result=document.querySelector('.result')
const wrongGuess=document.querySelector('.wrong-guesses')
const start_button=document.querySelector('.start-play')
const play_button=document.querySelector('.play')
let word='';
let Resultdata={
    won:0,
    lost:0
}

fetch('words.txt')
.then((response)=>{
    return response.text();
}).then((text)=>{
    wordlist=text.split(' ');
    main();
}).catch((err)=>{
    console.error('ERROR:',err)
})
