document.addEventListener("DOMContentLoaded", function () {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: "https://via.placeholder.com/150",
    },
    // Add more books as needed
  ];

  const bookList = document.getElementById("book-list");
  const cartList = document.getElementById("cart-list");
  const proceedOrderButton = document.getElementById("proceed-order");
  let cart = [];

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.className = "col-md-3 book-card";
    bookCard.innerHTML = `
            <div class="card">
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Author: ${book.author}</p>
                    <button class="btn btn-primary add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
    bookList.appendChild(bookCard);

    bookCard.querySelector(".add-to-cart").addEventListener("click", () => {
      cart.push(book);
      updateCart();
    });
  });

  function updateCart() {
    cartList.innerHTML = "";
    cart.forEach((book) => {
      const cartItem = document.createElement("li");
      cartItem.className = "list-group-item";
      cartItem.textContent = `${book.title} by ${book.author}`;
      cartList.appendChild(cartItem);
    });
  }

  proceedOrderButton.addEventListener("click", () => {
    if (cart.length > 0) {
      alert("Order placed successfully!");
      cart = [];
      updateCart();
    } else {
      alert("Cart is empty. Add some books first.");
    }
  });
});
