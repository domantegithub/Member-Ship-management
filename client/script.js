const handleDelete = (id) => {
    const params = {method:"DELETE"};
    fetch(`http://localhost:3000/memberships/${id}`,params)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error));
};

const renderCard = (membership) => {
    const {name, price, description} = membership;
    const cardEl = document.createElement("div");
    const contentEl = document.createElement("div");

    const title = document.createElement("h3");
    const membershipPrice = document.createElement("h3");
    const serviceDescription = document.createElement("p");
    const actions = document.createElement("div");
    const deleteButton = document.createElement("span");
    const icon = document.createElement("i");

    title.textContent = `$${price} ${name}`;
    membershipPrice.textContent = price;
    serviceDescription.textContent = description;

    cardEl.className = "card";
    contentEl.className ="content";
    actions.className = "actions";
    deleteButton.className = "delete-button";
    icon.className = "fa-solid fa-trash-can";

    deleteButton.addEventListener("click", () => handleDelete(membership["_id"]));

    contentEl.append(title, serviceDescription);
    deleteButton.append(icon);
    actions.append(deleteButton);
    cardEl.append(contentEl, actions);

    document.querySelector(".cards").append(cardEl);
};

fetch("http://localhost:3000/memberships")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((membership) => renderCard(membership));
  })
  .catch((error) => console.error(error));
