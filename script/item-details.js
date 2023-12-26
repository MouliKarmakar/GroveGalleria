const popup=document.getElementById("popup");

//-----Logic to open the popup for item details-------
function openPopup(popupName, popupDetails,popupPrice,popupImg){
    let name=document.getElementById("popup-name");
    let details=document.getElementById("popup-descrption");
    let price=document.getElementById("popup-price");
    let image=document.getElementById("popup-img");

    name.innerHTML=popupName;
    details.innerHTML=popupDetails;
    price.innerHTML="Price: "+popupPrice;
    image.src=decodeURIComponent(popupImg);
    popup.classList.add("open-popup");

}

//-----Logic to open the popup for item details-------
function closePopup(){
    popup.classList.remove("open-popup");
}