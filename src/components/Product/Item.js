import React from 'react'

export default function ProductItem(props) {
  const { product, removeProduct } = props

  return (
    <section>
      <h1>{product.name}</h1>
      <button 
        onClick={() => removeProduct(product.name)}
        data-testid="product-remove-button"
      >
        Remover produto
      </button>
    </section>
  )
}