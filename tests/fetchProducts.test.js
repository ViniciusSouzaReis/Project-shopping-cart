require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  it('Executa a função fetchProducts com o argumento "computador" e testa de fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Testa se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async() => {
    const awaitFunction = await fetchProducts('computador');
    expect(awaitFunction).toEqual(computadorSearch);
  });

  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    const noParameter = await fetchProducts();
    expect(noParameter).toEqual(new Error('You must provide an url'));
  });

});
