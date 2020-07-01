import React from 'react'

class ProductForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      name: ''
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.formSubmit(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    const { name } = this.state
    
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input 
          name="name"
          value={name}
          onChange={this.handleInputChange}
          type="text"
          required
        />
        <button type="submit">
          Adicionar produto
        </button>
      </form>
    )
  }
}

export default ProductForm