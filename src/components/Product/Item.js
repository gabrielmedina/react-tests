import React from 'react'

class ProductItem extends React.Component {
  removeProduct = (product) => {
    this.props.productRemove(this.props.product.name)
  }

  render() {
    const { product } = this.props

    return (
      <section>
        <h1>{product.name}</h1>
        <button 
          onClick={this.removeProduct}
          data-testid="product-remove-button"
        >
          Remover produto
        </button>
      </section>
    )
  }
}

export default ProductItem