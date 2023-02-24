let productsContainer = document.querySelector(".products-container");
let prevBtn = document.querySelector(".previous-page");
let nextBtn = document.querySelector(".next-page");
let pageOneBtn = document.querySelector(".one");
let pageTwoBtn = document.querySelector(".two");

//variable for cut throught price 
let originalPrice = 0;

let currentPage = 1;
let productsPerPage = 12;
let totalPages = 2;
let productsData = [];
function fetchProductsData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      productsData=data
      renderPage(currentPage);
     console.log(data)
    })
    .catch((error) => console.error(error));
}

fetchProductsData("https://63c812db075b3f3a91d99323.mockapi.io/Clothes");


function renderPage(page) {
  productsContainer.innerHTML = "";

  let startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;

  let currentProducts = productsData.slice(startIndex, endIndex);

  currentProducts.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("product-card");

    let image = document.createElement("img");
    image.src = product.Image;
    image.alt = product.name;
    card.appendChild(image);

    let name = document.createElement("h3");
    name.textContent = product.Title;
    name.classList.add("product-title");
    let anchor = document.createElement("a");
    anchor.href = "productsdetails.html";
    anchor.appendChild(name);
    card.appendChild(anchor);

    let description = document.createElement("p");
    description.textContent = product.Description;
    description.classList.add("product-description");

    card.appendChild(description);

    let rating = document.createElement("div");
    rating.classList.add("rating");
    rating.textContent = product.Rating;

    for (let i = 0; i < 5; i++) {
      let icon = document.createElement("img");
      icon.src = "icons8.png";
      rating.appendChild(icon);
    }

    card.appendChild(rating);

    let price = document.createElement("p");
    let originalP = document.createElement("span");
    // originalP.innerText = `₹${parseInt(product.Price)-parseInt(product.Price/0.2)}`
    // console.log(originalP);
    price.textContent = `₹${product.Price}` + `(20% off)`;
    card.appendChild(price);
    // card.appendChild(originalP);

    productsContainer.appendChild(card);
  });

  currentPage = page;
  if (currentPage == 1) {
    prevBtn.disabled = true;
    pageOneBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    pageOneBtn.disabled = false;
  }
  if (currentPage == totalPages) {
    nextBtn.disabled = true;
    pageTwoBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    pageTwoBtn.disabled = false;
  }
}

prevBtn.addEventListener("click", () => {
  renderPage(currentPage - 1);
});
nextBtn.addEventListener("click", () => {
  renderPage(currentPage + 1);
});
pageOneBtn.addEventListener("click", () => {
  renderPage(1);
});
pageTwoBtn.addEventListener("click", () => {
  renderPage(2);
});
