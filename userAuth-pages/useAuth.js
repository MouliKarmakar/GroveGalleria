// ----------- Targetting the elements--------
const openbtn=document.getElementById("open-popup");
const closebtn=document.getElementById("close-popup")
const popup=document.getElementById("popup");

// ---------Handel popup opening-------
openbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    popup.classList.add("open-popup");
})

//---------Handel popup closing-------
closebtn.addEventListener("click",()=>{
    popup.classList.remove("open-popup");
})