export const addTodo = item => {
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
