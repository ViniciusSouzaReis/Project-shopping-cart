const saveCartItems = () => {
  // seu código aqui
  const buttonSaveTask = document.querySelector('ol');
  localStorage.setItem('cartItems', buttonSaveTask.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
