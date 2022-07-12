const getSavedCartItems = () => {
  const buttonloadTask = document.querySelector('ol');
  const local = localStorage.getItem('cartItems');
  buttonloadTask.innerHTML = local;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
