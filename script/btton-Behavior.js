const topBtton=document.getElementsByClassName("topbtn");

const scrollTop=()=>{
    if(document.body.scrollTop>100||document.documentElement>100){
        topBtton[0].style.display="block";
    }
    // else{
    //     topBtton[0].style.display="none";
    // }
}
window.onscroll=()=>{
    scrollTop();
};

topBtton[0].addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
topBtton[1].addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})