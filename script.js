

/*const products = document.querySelector(".products");
const popup = document.querySelector(".popup-box")

products.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        const item = event.target.parentElement;
        const h3 = item.querySelector("h3").innerHTML;
        const readMoreCont = item. querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h3").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    }
})

function popupBox() {
    popup.classList.toggle("open");
}*/

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup3() {
    document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup4() {
    document.getElementById("popup-4").classList.toggle("active");
}

function togglePopup5() {
    document.getElementById("popup-5").classList.toggle("active");
}

function togglePopup6() {
    document.getElementById("popup-6").classList.toggle("active");
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}