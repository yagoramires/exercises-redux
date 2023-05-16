export const addFruit = (name) => ({
  type: 'ADD_FRUIT',
  payload: name,
});

export const removeFruit = (name) => ({
  type: 'REMOVE_FRUIT',
  payload: name,
});
