let furnitures;

function getFurniture() {
  return fetch(api('originalApi'))
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .catch(error => {
      alert(error);
    })
}

async function allFurniture() {
  furnitures = await getFurniture();
  console.log(furnitures);
  for (furniture of furnitures) {
    displayFurnitures(furniture);
  }
}

allFurniture();

function displayFurnitures(furniture) {

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const cardUl = document.createElement('ul');
  cardUl.classList.add('cardUl');

  const cardLi = document.createElement('li')
  cardLi.classList.add('cardLi');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card__header');

  const cardHeaderTitle = document.createElement('span')
  cardHeaderTitle.classList.add('card__Title');
  cardHeaderTitle.innerText = furniture.name;

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('card__container-img');

  const img = document.createElement('img');
  img.src = furniture.imageUrl;
  img.classList.add('card__img');
  img.setAttribute('alt', 'meuble ' + furniture.name);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card__body');

  const description = document.createElement('p');
  description.classList.add('card__text');
  description.innerText = furniture.description;

  document.getElementById('products').append(cardContainer);
  cardContainer.append(cardUl);
  cardUl.append(cardLi);
  cardLi.append(cardHeader, imgContainer, cardBody);
  cardHeader.append(cardHeaderTitle);
  imgContainer.append(img);
  cardBody.append(description);
}