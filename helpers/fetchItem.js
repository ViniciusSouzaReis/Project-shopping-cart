const fetchItem = async (itemId) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  try {
    const promiseFetch = await fetch(url);
    const results = await promiseFetch.json();
    return results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
