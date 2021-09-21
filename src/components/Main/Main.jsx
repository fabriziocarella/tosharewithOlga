import React, { Component } from "react";
import ProductList from '../ProductList'

class Main extends Component {
  render() {
    return (
      <main>
        <ProductList /> {/*Importamos la ProductList en la Main */}
      </main>
    )
  }
}

export default Main;
