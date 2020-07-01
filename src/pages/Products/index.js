import React from 'react'
import ProductForm from '../../components/Product/Form'
import ProductItem from '../../components/Product/Item'

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          name: 'Heineken'
        },
        {
          name: 'Budweiser'
        },
        {
          name: 'Eisenbahn'
        },
        {
          name: 'Antarctica Original'
        },
        {
          name: 'Bohemia'
        }
      ]
    }
  }

  addProduct = (product) => {
    this.setState({
      products: [ ...this.state.products, product ]
    })
  }

  removeProduct = (name) => {
    let products = this.state.products

    products.map((product, index) => {
      if(product.name.indexOf(name) !== -1) {
        products.splice(index, 1)

        this.setState({
          products: products
        })
      }
    })
  }

  render() {
    const { products } = this.state
    products.reverse()
    
    return (
      <section>
        <header>
          <h1>Products</h1>
        </header>

        <ProductForm formSubmit={this.addProduct} />

        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <ProductItem product={product} productRemove={this.removeProduct} />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Products