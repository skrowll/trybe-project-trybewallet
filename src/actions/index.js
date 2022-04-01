// Coloque aqui suas actions
export const ENTER_USER = 'ENTER_USER';

export const enterUser = (email) => ({
  type: ENTER_USER,
  email,
});
