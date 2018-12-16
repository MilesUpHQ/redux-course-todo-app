import React from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/todos").then(response => {
      console.log(response.data);
      this.setState({
        items: response.data
      });
    });
  }

  addTodo = item => {
    if (item) {
      axios
        .post("http://localhost:8080/todos", { todo: { title: item } })
        .then(response => {
          this.setState({
            items: [...this.state.items, response.data]
          });
        });
    }
    // this.setState({
    //   items: [...this.state.items, item]
    // });
  };

  deleteTodo = itemId => {
    axios.delete("http://localhost:8080/todos/" + itemId).then(response => {
      this.setState({
        items: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <Navbar name="My Todo App" />
        <TodoForm addTodo={this.addTodo} />
        <TodoList items={this.state.items} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
