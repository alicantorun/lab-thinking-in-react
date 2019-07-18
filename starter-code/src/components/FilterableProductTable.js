import React, { Component } from "react";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable.js";

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    search: ""
  };

  productFilter = value => {
    console.log(value);
    let filteredProducts = [...this.state.products];
    filteredProducts = filteredProducts.filter(item => {
      return item.name.includes(value);
    });
    console.log(filteredProducts);
    this.setState({ search: value });
  };

  render() {
    return (
      <div>
        <SearchBar productFilter={this.productFilter} />
        <ProductTable
          search={this.state.search}
          products={this.state.products}
        />
      </div>
    );
  }
}
