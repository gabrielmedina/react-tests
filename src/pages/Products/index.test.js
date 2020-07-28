import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Products from './'

describe('Testes para Produtos', () => {
  it('Deve adicionar um novo produto na lista quando submeter o formulário', async () => {
    render(<Products/>)

    const product = 'Heineken'
    
    fireEvent.change(screen.getByTestId('form-product-input-name'), { target: { value: product } })
    fireEvent.click(screen.getByTestId('form-product-button'))

    expect(screen.getByText(product)).toBeInTheDocument()
  })

  it('Deve remover o produto da lista quando o botão de remover produto for clicado', async () => {
    render(<Products/>)

    const product = 'Heineken'
    
    fireEvent.change(screen.getByTestId('form-product-input-name'), { target: { value: product } })
    fireEvent.click(screen.getByTestId('form-product-button'))
    fireEvent.click(screen.getByTestId('product-remove-button'))

    expect(screen.getByTestId('product-list')).toBeEmpty()
  })
})