const renderCard = (membership) => {
    const {name, price, description} = membership;
    const cardsEl = document.createElement("div");
    const cardEl = document.createElement("div");
    const contentEl = document.createElement("div");

    const title = document.createElement("h2");
    const membershipPrice = document.createElement("h2");
    const serviceDescription = document.createElement("p");
    const deleteButton = document.createElement("button");

    title.textContent = name;
    membershipPrice.textContent = price;
    serviceDescription.textContent = description;
    deleteButton.textContent = "Delete";

    cardsEl.className = "cards";
    cardEl.className = "card";
    contentEl.className ="content";

    contentEl.append(membershipPrice, title);
    cardEl.append(contentEl,serviceDescription, deleteButton);

    document.querySelector(".cards").append(cardEl);
};

fetch("http://localhost:3000/memberships")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((membership) => renderCard(membership));
  })
  .catch((error) => console.error(error));