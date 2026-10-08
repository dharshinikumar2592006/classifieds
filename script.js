let products = [

    {
        id: 1,
        name: "iPhone 13",
        price: 35000,
        location: "Chennai",
        seller: "Rahul",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
        description: "Good condition iPhone 13. 128GB storage.",
        likes: 2
    },

    {
        id: 2,
        name: "Dell Laptop",
        price: 28000,
        location: "Coimbatore",
        seller: "Priya",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        description: "Dell laptop with good performance.",
        likes: 4
    },

    {
        id: 3,
        name: "Mountain Bicycle",
        price: 8500,
        location: "Madurai",
        seller: "Arun",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e",
        description: "Used mountain bicycle in good condition.",
        likes: 5
    },

    {
        id: 4,
        name: "Wooden Sofa",
        price: 12000,
        location: "Tirunelveli",
        seller: "Karthik",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        description: "Comfortable wooden sofa. Well maintained.",
        likes: 3
    }

];


// Display products

function displayProducts(list = products) {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    if (list.length === 0) {

        productList.innerHTML = `
            <h3>No products found.</h3>
        `;

        return;
    }


    list.forEach(function(product) {

        productList.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-content">

                    <h3>${product.name}</h3>

                    <div class="price">
                        ₹${product.price.toLocaleString()}
                    </div>

                    <div class="location">
                        📍 ${product.location}
                    </div>

                    <div class="description">
                        ${product.description}
                    </div>

                    <div class="seller">
                        👤 Seller: ${product.seller}
                    </div>

                    <div class="actions">

                        <button
                            class="like"
                            onclick="likeProduct(${product.id})"
                        >
                            ❤️ ${product.likes}
                        </button>

                        <button
                            class="contact"
                            onclick="contactSeller('${product.seller}')"
                        >
                            📞 Contact
                        </button>

                    </div>

                    <button
                        class="delete"
                        onclick="deleteProduct(${product.id})"
                    >
                        🗑️ Delete
                    </button>

                </div>

            </div>

        `;

    });

}


// Add product

function addProduct() {

    let name = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let location = document.getElementById("productLocation").value;
    let seller = document.getElementById("sellerName").value;
    let image = document.getElementById("productImage").value;
    let description = document.getElementById("productDescription").value;


    if (
        name === "" ||
        price === "" ||
        location === "" ||
        seller === "" ||
        description === ""
    ) {

        alert("Please fill all details!");

        return;
    }


    // Default image

    if (image === "") {

        image =
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30";

    }


    let newProduct = {

        id: Date.now(),

        name: name,

        price: Number(price),

        location: location,

        seller: seller,

        image: image,

        description: description,

        likes: 0

    };


    products.unshift(newProduct);


    // Clear form

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productLocation").value = "";
    document.getElementById("sellerName").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productDescription").value = "";


    displayProducts();


    alert("Product posted successfully!");


    // Go to products

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


// Search

function searchProducts() {

    let search =
        document.getElementById("searchBox").value.toLowerCase();


    let filteredProducts = products.filter(function(product) {

        return (
            product.name.toLowerCase().includes(search) ||
            product.location.toLowerCase().includes(search) ||
            product.seller.toLowerCase().includes(search)
        );

    });


    displayProducts(filteredProducts);

}


// Like

function likeProduct(id) {

    let product = products.find(function(product) {

        return product.id === id;

    });


    if (product) {

        product.likes++;

        displayProducts();

    }

}


// Contact seller

function contactSeller(name) {

    alert(
        "You can contact " +
        name +
        " to buy this product."
    );

}


// Delete

function deleteProduct(id) {

    let confirmDelete =
        confirm("Do you want to delete this product?");


    if (confirmDelete) {

        products = products.filter(function(product) {

            return product.id !== id;

        });


        displayProducts();

    }

}


// Show add form

function showAddForm() {

    document.getElementById("sell").scrollIntoView({
        behavior: "smooth"
    });

}


// Show home

function showHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// Load products when page opens

displayProducts();