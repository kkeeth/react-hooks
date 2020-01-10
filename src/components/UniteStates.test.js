import React from 'react'
import { render } from '@testing-library/react'
import UniteStates from './UniteStates'

test('renders learn react link', () => {
  const { getByText } = render(<UniteStates />)
  const linkElement = getByText(/Now/i)
  expect(linkElement).toBeTruthy()
})
