import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };
  render() {
    return (
      <form>
        <input
          onChange={this.handleChange}
          type="text"
          className="form-control"
          value={this.state.inputText}
        />
        <button onClick={this.handleClick} className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}
export default TodoForm;
