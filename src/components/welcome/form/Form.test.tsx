import { render, screen } from '@testing-library/react';
import Form from './Form'


describe('Testing Form component', () => {

    test('it has a form heading', () => {

        render(<Form />)

        const formElem = screen.getByText('Personal details form')
        expect(formElem).toBeInTheDocument()

    })

    test('it has correct inputs', () => {

        render(<Form />)

        const inputElem = screen.getByRole('textbox', { name: "Name" })
        expect(inputElem).toBeInTheDocument()

        const selectElem = screen.getByRole('combobox')
        expect(selectElem).toBeInTheDocument()

        const checkElem = screen.getByRole('checkbox')
        expect(checkElem).toBeInTheDocument()

    })

    test('it has correct input labels', () => {

        render(<Form />)

        const testIdElem = screen.getByTestId('topelement')
        expect(testIdElem).toBeInTheDocument()

        const titleElem = screen.getByTitle('close')
        expect(titleElem).toBeInTheDocument()

        const imgElem = screen.getByAltText('Random man image')
        expect(imgElem).toBeInTheDocument()

        const inputElem = screen.getByLabelText('Name')
        expect(inputElem).toBeInTheDocument()

        const selectElem = screen.getByLabelText('Location')
        expect(selectElem).toBeInTheDocument()

        const checkElem = screen.getByLabelText('I accept the terms')
        expect(checkElem).toBeInTheDocument()

    })
})