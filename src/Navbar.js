import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{this.props.name}</span>
      </nav>
    );
  }
}
export default Navbar;
