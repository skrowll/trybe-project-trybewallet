// Coloque aqui suas actions
export const ENTER_USER = 'ENTER_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const enterUser = (email) => ({
  type: ENTER_USER,
  email,
});

export const addCurrencies = (currencies) => ({
  type: ADD_CURRENCIES,
  currencies,
});
