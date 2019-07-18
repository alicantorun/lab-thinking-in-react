import React, { Component } from "react";

export default class ProductsRow extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.product.name}</th>
        <th>{this.props.product.price}</th>
      </tr>
    );
  }
}
