import React, { useState } from 'react'
import ProductForm from '../../components/Product/Form'
import ProductItem from '../../components/Product/Item'

export default function Products() {
  const [products, setProducts] = useState([])


  function addProduct(product) {
    setProducts([ ...products, product ])
  }

  function removeProduct(name) {
    const theProducts = [ ...products ]

    theProducts.forEach((product, index) => {
      if(product.name.indexOf(name) !== -1) {
        theProducts.splice(index, 1)
        setProducts(theProducts)
      }
    })
  }

  return (
    <section>
      <header>
        <h1>Products</h1>
      </header>

      <ProductForm formSubmit={addProduct} />

      <ul data-testid="product-list">
        {products.map((product, index) => (
          <li key={index}>
            <ProductItem product={product} removeProduct={removeProduct} />
          </li>
        ))}
      </ul>
    </section>
  )
}