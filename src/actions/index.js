// Coloque aqui suas actions
export const ENTER_USER = 'ENTER_USER';
// export const CURRENCY = 'CURRENCY';

export const enterUser = (email) => ({
  type: ENTER_USER,
  email,
});

// export const currency = (value) => ({
//   type: CURRENCY,
//   value,
// });
