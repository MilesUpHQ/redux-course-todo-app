import axios from "axios";

const loadTodos = items => {
  return {
    type: "LOAD_TODOS",
    items: items
  };
};

const addTodo = item => {
  item = item.title.toUpperCase();
  return {
    type: "ADD_TODO",
    item: item
  };
};

// Delete todo in store
const deleteTodo = item => {
  return {
    type: "DELETE_TODO",
    item: item
  };
};

// Delete todo on server
const requestDeleteTodo = item => {
  return (dispatch, getState) => {
    axios
      .delete("http://localhost:8080/todos/" + item.id)
      .then(response => {
        dispatch(deleteTodo(item));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const requestTodos = () => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:8080/todos")
      .then(response => {
        console.log(getState());
        console.log(response.data);
        dispatch(loadTodos(response.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

const requestAddTodo = item => {
  return dispatch => {
    axios
      .post("http://localhost:8080/todos", { todo: { title: item } })
      .then(response => {
        // console.log(getState());
        console.log(response.data);
        dispatch(addTodo(response.data));
      })
      .catch(error => {
        alert(error);
      });
  };
};

export default { requestTodos, requestAddTodo, requestDeleteTodo };
