import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });

    this.props.productFilter(value);
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name" />
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Search for fod..."
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}
