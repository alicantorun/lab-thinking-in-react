import React, { Component } from "react";
import ProductRow from "./ProductsRow";

export default class ProductTable extends Component {
  render() {
    const elements = this.props.products
      .filter(el => el.name.includes(this.props.search))
      .map((product, index) => {
        return <ProductRow key={index} product={product} />;
      });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
      </div>
    );
  }
}
