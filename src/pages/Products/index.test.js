import React from 'react'
import { fireEvent, render, waitForElement } from '@testing-library/react'

import Products from './'

describe('Testes para Produtos', () => {
  it('Deve adicionar um novo produto na lista quando submeter o formulário', async () => {
    const { getByTestId, getByText } = render(<Products/>)

    const product = 'Heineken'
    
    const productName = await waitForElement(
      () => getByTestId('form-product-input-name')
    )
    fireEvent.change(productName, { 
      target: { value: product }
    })

    const productBtn = await waitForElement(
      () => getByTestId('form-product-button')
    )
    fireEvent.click(productBtn)

    const productList = await waitForElement(
      () => getByTestId('product-list')
    )
    
    const liNode = await waitForElement(
      () => getByText(product)
    )

    expect(liNode).toBeInTheDocument()
  })
})