import React from "react";
import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../actions/todo";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getTodos();
  }
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
    getTodos: () => dispatch(actions.requestTodos()),
    addTodo: item => dispatch(actions.requestAddTodo(item)),
    deleteTodo: item => {
      dispatch(actions.requestDeleteTodo(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
