import React, { Component } from "react";
import Product from '../Product'
import products from '../../data'


class ProductList extends Component {
  constructor(props) {
    super(props)

    this.url = React.createRef() // Referencia para la URL
    this.state = {
      data: {},
      'products': products // [{p1},{p2},{p3},{p4},]
    }
  }
  addProduct = (event) => {
    // const name = prompt("Introduce nombre")
    // const desc = prompt("Introduce descripción")

    event.preventDefault();
    const name = event.target.elements.name.value
    const desc = event.target.elements.desc.value
    // const url = event.target.elements.url.value // Una forma de recoger el valor de URL en el form
    const url = this.url.current.value // Leer el valor de la referencia URL
    alert(url)

    const price = event.target.elements.price.value

    if (name && desc && url && price) {
      const product = { name, desc, url, price }
      // Se pide guardar en el state los datos recibidos
      this.setState({ data: product })
      // Añadimos los productos al array
      const newProduct = product
      this.setState({ products: [...this.state.products, newProduct] })
    }
  }
  removeAllProducts = () => {
    this.setState({ data: {} })
    this.setState({ products })
    // alert("Has borrado todo")
  }
  removeProduct = (i) => {
    const remainProd = this.state.products.filter((product, index) => index !== i)
    this.setState({ products: remainProd })
  }
  paintProducts = () => {
    // [{p1},{p2},{p3},{p4},]
    return this.state.products.map((product, i) => <Product info={product} key={i} remove={() => this.removeProduct(i)} />)
  }
  handleChange = (event) => {
    console.log(event.target.value)
  }
  render() {
    const msg = this.state.data.name
      ? <h2>Último producto añadido: {this.state.data.name}</h2>
      : <h2>Bienvenido</h2>
    return (
      <React.Fragment>
        <section>
          <form onSubmit={this.addProduct}>
            <label>
              Nombre:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <br />
            <label>
              Descripción:
              <input type="text" name="desc" />
            </label>
            <br />
            <label>
              URL:
              <input type="url" name="url" ref={this.url} />
            </label>
            <br />
            <label>
              Precio:
              <input type="text" name="price" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>

        <section>
          <h4>Añadir producto</h4>
          <button onClick={this.addProduct}>Añadir producto</button>
          <h4>Borrar insertados</h4>
          <button onClick={this.removeAllProducts}>Borra todo</button>
          {msg}
        </section>

        <section>
          <h1>Aquí la lista de productos</h1>
          <article>
            {/* Para leer siempre el array de productos y los inserte en el DOM (línea 32, función paintProducts()) */}
            {this.paintProducts()}
          </article>
        </section>
      </React.Fragment>
    )
  }
}

export default ProductList;
