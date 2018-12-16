export const addTodo = item => {
  item = item.toUpperCase();
  return {
    type: "ADD_TODO",
    item: item
  };
};

export const deleteTodo = item => {
  return {
    type: "DELETE_TODO",
    item: item
  };
};

export default { addTodo, deleteTodo };
