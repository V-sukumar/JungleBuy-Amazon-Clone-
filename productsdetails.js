const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;
let cartitems=[]
imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);



let data = {
  // "image":"https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80",
  //  "description":"HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers",
  //  "price":35300,

  "Description"
    :
    "Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Xbox Game Pass/Platinum",
"Image"
    :
    "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg",
"Price"
    : Number(39999),
"Rating"
    :
    "4.0",
"Title"
    :
    "Lenovo IdeaPad 3",

}
let cart = document.querySelector(".btn");

cart.addEventListener("click", () => {
  let cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
  let d = new Date();
  data.key = d
  cartdata.push(data);
  localStorage.setItem("cartdata", JSON.stringify(cartdata))
  console.log(cartdata)

  console.log(d)
  alert("Your Product Added To Cart")

})

