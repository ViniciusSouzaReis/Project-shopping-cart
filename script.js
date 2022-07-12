const getBody = document.querySelector('body');
const selectBtnDelete = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const filterApiReturn = async () => {
  const getValues = await fetchProducts('computador');
  const getResult = await getValues.results;
  const getSection = document.querySelector('.items');
  getResult.forEach((element) => {
    const obj = { sku: element.id, name: element.title, image: element.thumbnail };
    getSection.appendChild(createProductItemElement(obj));
  });
};

const createList = async (parameter) => {
  const getOl = document.querySelector('.cart__items');
  const getValues = await fetchItem(parameter);
  const obj = { sku: getValues.id, name: getValues.title, salePrice: getValues.price };
  getOl.appendChild(createCartItemElement(obj));
  saveCartItems();
  getSkuFromProductItem();
};

getBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('item__add')) {
    const getItemId = event.target.parentNode.firstChild.innerText;
    createList(getItemId);
  }
});

const deletelist = () => {
  const liList = document.querySelectorAll('li');
  liList.forEach((li) => {
    if (li.classList.contains('cart__item')) {
      li.remove();
    }
  });
};

selectBtnDelete.addEventListener('click', deletelist);

window.onload = () => { 
  filterApiReturn();
  getSavedCartItems(); 
};
