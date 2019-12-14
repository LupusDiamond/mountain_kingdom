function createCard(name, desc, c, src) {
  // Empty Card
  const card_item = document.createElement("div");
  card_item.className += "card";

  // Adding the Card Image
  const card_image = document.createElement("div");
  card_image.className += "card-image";
  card_item.appendChild(card_image);

  // Img Info
  const img_item = document.createElement("img");
  img_item.src = src;
  card_image.appendChild(img_item);

  // Adding the Card Title

  const card_title = document.createElement("span");
  card_title.className += "card-title";
  card_title.innerHTML = name;
  card_image.appendChild(card_title);

  // Adding the Card Icon

  const card_icon = document.createElement("a");
  card_icon.className +=
    "btn-floating halfway-fab waves-effect waves-light red";
  card_image.appendChild(card_icon);

  icon_item = document.createElement("i");
  icon_item.className += "material-icons";
  icon_item.innerHTML = "add";
  card_icon.appendChild(icon_item);

  // Adding the Card Content
  const card_content = document.createElement("div");
  card_content.className += "card-content";
  card_item.appendChild(card_content);

  const p_item = document.createElement("p");
  p_item.innerHTML = desc;
  card_content.appendChild(p_item);

  document.querySelector(c).appendChild(card_item);
}

createCard(
  "Big Mountain",
  "I am a big mountain",
  ".r1",
  "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
);
createCard(
  "Big Mountain",
  "I am a big mountain",
  ".r1",
  "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
);
createCard(
  "Big Mountain",
  "I am a big mountain",
  ".r2",
  "https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
);
createCard(
  "Big Mountain",
  "I am a big mountain",
  ".r2",
  "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
);

createCard(
  "Big Mountain",
  "I am a big mountain",
  ".r3",
  "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
);
createCard(
  "Big Mountain",
  "I am a big mountain",
  ".r3",
  "https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
);
