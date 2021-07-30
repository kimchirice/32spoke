import React from 'react'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from './App'

describe('<App />', () => {
    test('input label of Hub name', () => {
        render(<App />)
        const inputElement = screen.getByLabelText(/^hub name/i)
        expect(inputElement).toBeInTheDocument()
    })

    test('input fields of hub weight', () => {
        render(<App />)
        const inputElement = screen.getByLabelText(/hub weight/i)
        expect(inputElement).toBeInTheDocument()
    })

    test('input field of Spoke hole diameter', () => {
        render(<App />)
        const inputElement = screen.getByLabelText(/Spoke hole diameter/i)
        expect(inputElement).toBeInTheDocument()
    })
    test('input field of Left Flange diameter ', () => {
        render(<App />)
        const inputElement = screen.getByText(/Left Flange diameter/i)
        expect(inputElement).toBeInTheDocument()
    })

    test('input field of Right Flange diameter', () => {
        render(<App />)
        const inputElement = screen.getByText(/Right Flange diameter/i)
        expect(inputElement).toBeInTheDocument()
    })
    test('input field of Left Flange to Center', () => {
        render(<App />)
        const inputElement = screen.getByText(/Left Flange to Center/i)
        expect(inputElement).toBeInTheDocument()
    })
    test('input field of right Flange to Center', () => {
        render(<App />)
        const inputElement = screen.getByText(/right Flange to Center/i)
        expect(inputElement).toBeInTheDocument()
    })
})
