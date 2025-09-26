const searchBar = document.getElementById("searchBar");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");
const stayCards = document.querySelectorAll(".stay-card");

function filterStays() {
  const searchText = searchBar.value.toLowerCase();
  const location = locationFilter.value;
  const type = typeFilter.value;
  const price = priceFilter.value;

  stayCards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    const cardLocation = card.dataset.location;
    const cardType = card.dataset.type;
    const cardPrice = card.dataset.price;

    let matches = true;

    if (searchText && !name.includes(searchText)) matches = false;
    if (location && cardLocation !== location) matches = false;
    if (type && cardType !== type) matches = false;
    if (price && cardPrice !== price) matches = false;

    card.style.display = matches ? "block" : "none";
  });
}

searchBar.addEventListener("input", filterStays);
locationFilter.addEventListener("change", filterStays);
typeFilter.addEventListener("change", filterStays);
priceFilter.addEventListener("change", filterStays);
