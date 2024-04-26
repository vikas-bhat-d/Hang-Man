const input=document.querySelector(".input-text")
input.addEventListener("keydown",e=>{
    console.log(e);
    if(e.key=='Enter'){
        if(input.value!="")
            insertDiv(input.value)
        input.value="";
    }
    else if(e.key=='Escape'){
        // if(input.value!="")
            removeDiv();
    }
})
function insertDiv(item){
const newdiv=document.createElement('div')
newdiv.innerHTML=item;
newdiv.setAttribute("class",'letter')
// console.log(newdiv);
const parent=document.querySelector('.letters')
// console.log(parent)
parent.appendChild(newdiv)
// console.log(parent)
}

function removeDiv(){
    const div_remove=document.querySelector('.letters')
    if(div_remove.lastElementChild!=null)
        div_remove.removeChild(div_remove.lastElementChild)

}
// const parent=newdiv.parentNode.nodeName
// console.log(parent)
// document.newdiv.parentNode.appendChild(newdiv)