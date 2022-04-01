const currenciesAPI = async () => {
  const END_POINT = 'https://economia.awesomeapi.com.br/json/all';

  const response = await fetch(END_POINT);

  const result = await response.json();

  return result;
};

export default currenciesAPI;
