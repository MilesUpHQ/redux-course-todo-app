import React from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import axios from "axios";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar name="My Todo App" />
        <TodoForm addTodo={item => this.props.addTodo(item)} />
        <TodoList items={this.props.items} deleteTodo={this.props.deleteTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.todos
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: item => {
      dispatch({ type: "ADD_TODO", item: item });
    },
    deleteTodo: item => {
      dispatch({ type: "DELETE_TODO", item: item });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);