let url = "https://63c812db075b3f3a91d99323.mockapi.io/Clothes";


//catching the main product container
let mainContainer = document.getElementById("productInnerContainer")
//catching edit produc button
let editProductButton = document.getElementById("editProductButton");

//catching the product update form
let updateid = document.getElementById("update-product-id");
let updateProductImage = document.getElementById("update-product-image");
let updateProductTitle = document.getElementById("update-product-title");
let updateProductDescription = document.getElementById("update-product-description");
let updateProductRating = document.getElementById("update-product-rating");
let updateProductPrice = document.getElementById("update-product-price");
let updateProductUpdateBtn = document.getElementById("update-product");

//catching the add new product form
let addProductImage = document.getElementById("add-product-image");
let addProductTitle = document.getElementById("add-product-title");
let addProductDescription = document.getElementById("add-product-description");
let addProductRating = document.getElementById("add-product-rating");
let addProductPrice = document.getElementById("add-product-price");
let addProductBtn = document.getElementById("add-product");

// catching delete product form
let deleteid = document.getElementById("delete-product-id");
let deleteProductBtn = document.getElementById("delete-product");


addEventListener("load", (event) => {
    fetchProductsFunction();
});
async function fetchProductsFunction() {
    try {
        // by default no need to pass object to fetch function bcz by default request if get only
        let getProducts = await fetch(`${url}`);
        let productData = await getProducts.json();

        console.log(productData);
        // employeesDataMainArray = employeeData;
        // now will call a function that will render the employee data
        renderCardList(productData);
    } catch (error) {
        console.log(error);
    }
}

// render product cards

function renderCardList(cardData) {
    let cardList = `
    <div class="card-list">
      ${cardData
            .map((item) =>
                getCard(
                    item.Image,
                    item.Title,
                    item.Description,
                    item.Rating,
                    item.Price,
                    item.id,
                )
            )
            .join("")}
    </div>
  `;

    mainContainer.innerHTML = cardList;

    // let editLinks = document.querySelectorAll(".card__link");
    // for (let editLink of editLinks) {
    //     editLink.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         let currentId = e.target.dataset.id;
    //         populateEditForms(currentId);
    //     });
    // }
}

function getCard(image, title, desc, rating, price, id) {
    let card = `
    <div class="product-card">
        <img src="${image}" alt="undefined" class = "productImg">
        <a href="productsdetails.html">
            <h3 class="product-title">${title}</h3>
        </a>
        <p class="product-description">${desc}</p>
        <div class="rating">${rating}
            <img src="icons8.png">
            <img src="icons8.png">
            <img src="icons8.png">
            <img src="icons8.png">
            <img src="icons8.png">
        </div>
        <p>${price}(20% off)</p>
       <!-- <button class="productBtn" id="editProductButton">EDIT</button> -->
        <span>Reference ID:${id}</span>
        
  </div>
    `;
    return card;
}

// update alll the fields of the products

updateProductUpdateBtn.addEventListener("click", updateProduct);

async function updateProduct() {
    try {
        let id = +updateid.value;
        let obj = {
            // id: updateid.value,
            Image: updateProductImage.value,
            Title: updateProductTitle.value,
            Description: updateProductDescription.value,
            Rating: updateProductRating.value,
            Price: updateProductPrice.value,
        };
        console.log(obj);
        let updateProduct = await fetch(`https://63c812db075b3f3a91d99323.mockapi.io/Clothes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        console.log(updateProduct);
        alert("Product updated");
    } catch (error) {
        console.log(error);
    }
}

// SHOW THE PRODUCT UPDATE SUCCESSFULL TOAST +++++++++++++++++++++++++++++++++
// const toastTrigger = document.getElementById('update-product')
// const toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', () => {
//     setTimeout(() => {
//         const toast = new bootstrap.Toast(toastLiveExample)

//         toast.show()

//     }, 1000);
//   })
// }


// SHOW THE PRODUCT UPDATE SUCCESSFULL TOAST ------------------------------------------


// creating new products+++++++++++++++++++++++++++++++++++++++++

addProductBtn.addEventListener("click", createProduct);

async function createProduct() {
    try {
        let obj = {
            // id: updateid.value,
            Image: addProductImage.value,
            Title: addProductTitle.value,
            Description: addProductDescription.value,
            Rating: addProductRating.value,
            Price: addProductPrice.value,
        };
        console.log(obj);

        let productData = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        console.log(productData)
        alert("product added successfully")
    } catch (error) {
        console.log(error);
    }
}

// creating new products------------------------------------

// deleting products+++++++++++++++++++++++++++++++++++++++++

deleteProductBtn.addEventListener("click", deleteProduct);

async function deleteProduct() {
    try {
       let deleteId = +deleteid.value;
        let productData = await fetch(`${url}/${deleteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id:deleteId}),
        });
        console.log(productData)
        alert("product deleted successfully")
    } catch (error) {
        console.log(error);
    }
}

// deleting products------------------------------------
// redirecting to update section on clicking the edit button present in product card++++++++++++++++++++++++++++++

// editProductButton.addEventListener("click",function(){
//     let toggle =document.getElementById('ex1-tab-2').getAttribute('aria-expanded')
//     console.log(toggle);
// })
// redirecting to update section on clicking the edit button present in product card----------------------------------