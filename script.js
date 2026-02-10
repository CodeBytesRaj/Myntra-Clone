let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){
let item = cart.find(i=>i.name===name);
item ? item.qty++ : cart.push({name,price,qty:1});
localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
}

function updateCartCount(){
document.getElementById("cart-count").innerText = cart.length;
}
updateCartCount();

function viewProduct(name,price,img){
localStorage.setItem("selectedProduct",JSON.stringify({name,price,img}));
window.location.href="product.html";
}

function searchProducts(){
let v = document.getElementById("search").value.toLowerCase();
document.querySelectorAll(".product-card").forEach(card=>{
let name = card.dataset.name;
card.style.display = name.includes(v) ? "block" : "none";
});
}

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}

function toggleDark(){
document.body.classList.toggle("dark");
localStorage.setItem("theme",
document.body.classList.contains("dark")?"dark":"light");
}
