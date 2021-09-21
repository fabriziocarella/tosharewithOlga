import React, { Component } from "react";
import './Product.css'

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      empresa: this.props.info.empresa || "VendeHumo S.A."
    }
  }

  render() {
    const { name, desc, url, price } = this.props.info
    const empresa = this.state.empresa
    return (
      <section>
        <h3>Producto - {name}</h3>
        <p> {desc}</p>
        <p>Empresa: {empresa}</p>
        <p>Precio: {price} €</p>
        <img src={url} alt={name} className="prod_img"/>
        <br />
        <button onClick={this.props.remove}>Borrar</button>
      </section>
    )
  }
}

export default Product;
