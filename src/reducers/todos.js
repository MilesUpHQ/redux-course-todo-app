const nameInitialState = { todos: ["Buy Milk", "Watch 2.0"] };

const reducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return state;
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
