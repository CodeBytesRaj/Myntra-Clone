// Search Products
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        card.style.display = title.includes(filter) ? 'block' : 'none';
    });
});

// Filter by Category
function filterCategory(category) {
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (category === '' || card.dataset.category === category) ? 'block' : 'none';
    });
}

// Cart Functionality
let cart = [];
let cartCount = 0;

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.product-card');
        const title = card.querySelector('.card-title').innerText;
        const price = parseInt(card.querySelector('.card-text').innerText.replace('₹',''));
        cart.push({title, price});
        updateCart();
        btn.textContent = 'Added';
        btn.disabled = true;
    });
});

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `<div class="d-flex justify-content-between mb-2">
            <span>${item.title}</span>
            <span>₹${item.price} <button class="btn btn-sm btn-danger" onclick="removeCart(${index})">✖</button></span>
        </div>`;
    });
    document.getElementById('cartTotal').innerText = total;
    cartCount = cart.length;
    document.getElementById('cart-count').innerText = cartCount;
}

function removeCart(index) {
    cart.splice(index, 1);
    updateCart();
}
