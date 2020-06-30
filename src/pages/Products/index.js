import React from 'react'
import ProductForm from '../../components/Product/ProductForm'
import ProductList from '../../components/Product/ProductList'

class Products extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>Products</h1>
        </header>

        <ProductForm />
        <ProductList />
      </section>
    )
  }
}

export default Products