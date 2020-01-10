import React from 'react'
import { render } from '@testing-library/react'
import MultipleStates from './MultipleStates'

test('renders learn react link', () => {
  const { getByText } = render(<MultipleStates />)
  const linkElement = getByText(/Now/i)
  expect(linkElement).toBeTruthy()
})
