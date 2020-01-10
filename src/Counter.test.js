import React from 'react'
import { render } from '@testing-library/react'
import Counter from './Counter'

test('renders count text', () => {
  const { getByText } = render(<Counter />)
  const linkElement = getByText(/count/i)
  expect(linkElement).toBeTruthy()
})
