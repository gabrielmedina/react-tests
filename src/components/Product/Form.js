import React, { useState } from 'react'

export default function ProductForm(props) {
  const [product, setProduct] = useState({ name: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
    props.formSubmit(product)
    setProduct({ name: '' })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input 
        name="name"
        value={product.name}
        onChange={(event) => setProduct({ name: event.target.value })}
        type="text"
        required
        data-testid="product-input-name"
      />
      <button 
        type="submit"
        data-testid="product-add-button">
        Adicionar produto
      </button>
    </form>
  )
}
