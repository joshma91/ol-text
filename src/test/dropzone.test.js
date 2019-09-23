import React from 'react'
import Dropzone from '../components/Dropzone'
import { fireEvent, render, waitForElement } from '@testing-library/react'

describe("Testing Dropzone component", () => {
  test('show file name after dropping file in component', async () => {

    const file = new File(['test'], 'some.txt', {type: "text/plain"})
    const { getByText, queryByText, getByTestId } = render(<Dropzone setFiles={jest.fn()}/>)
    const formElement = getByTestId('dropzone');

    // Define files property on Dropzone element and fire drop event
    Object.defineProperty(formElement, 'files', { value: [file] });
    fireEvent.drop(formElement)

    // Wait for DOM change
    await waitForElement(() => getByText(/some.txt/i))
  
    expect(queryByText('some.txt')).toBeDefined()
  })
})
