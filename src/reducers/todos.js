const nameInitialState = { todos: [] };

const reducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return { todos: action.items };
    case "ADD_TODO":
      const newtodos = [...state.todos, action.item];
      return { todos: newtodos };
    case "DELETE_TODO":
      const newTodos = state.todos.filter(item => item !== action.item);
      return { todos: newTodos };
    default:
      return state;
  }
};

export default reducer;
