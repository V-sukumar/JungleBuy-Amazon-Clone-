let apiUrl = "https://63c812db075b3f3a91d99323.mockapi.io/Clothes";

let resultsContainer = document.querySelector(".results");

fetch(apiUrl)
  .then((response) => response.json())
  .then((products) => {
    let cards = products.map((product) => {
      let card = document.createElement("div");
      card.classList.add("card");

      let image = document.createElement("img");
      image.src = product.Image;
      image.alt = product.title;
      card.appendChild(image);

      let title = document.createElement("h3");
      title.textContent = product.Title;
      card.appendChild(title);

      let description = document.createElement("p");
      description.textContent = product.Description;
      card.appendChild(description);

      let rating = document.createElement("span");
      rating.classList.add("rating");
      rating.textContent = product.Rating;
      card.appendChild(rating);

      let price = document.createElement("span");
      price.classList.add("price");
      price.textContent = product.Price + "rs";
      card.appendChild(price);

      return card;
    });

    for (let i = 0; i < cards.length; i += 4) {
      let row = document.createElement("div");
      row.classList.add("row");

      for (let j = i; j < i + 4 && j < cards.length; j++) {
        row.appendChild(cards[j]);
      }

      resultsContainer.appendChild(row);
    }
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
