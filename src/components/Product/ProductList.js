import React from 'react'
import ProductForm from './ProductForm'
import ProductItem from './ProductItem'

class ProductList extends React.Component {
  render() {
    return (
      <section>
        <ProductForm />
        <ul>
          <li><ProductItem /></li>
        </ul>
      </section>
    )
  }
}

export default ProductList