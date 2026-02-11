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
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(name, price, img){
let existing = wishlist.find(item=>item.name===name);
if(!existing){
wishlist.push({name, price, img});
localStorage.setItem("wishlist", JSON.stringify(wishlist));
updateWishCount();
alert("Added to Wishlist");
}
}

function updateWishCount(){
let count = document.getElementById("wish-count");
if(count) count.innerText = wishlist.length;
}

updateWishCount();

function toggleDark(){
document.body.classList.toggle("dark");
localStorage.setItem("theme",
document.body.classList.contains("dark")?"dark":"light");
}
