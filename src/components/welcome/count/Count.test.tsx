import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import Count from './Count';

describe('Count test user events', () => {

    it('renders correctly', () => {
        render(<Count />)

        const h1El = screen.getByRole('heading')
        expect(h1El).toHaveTextContent('0')

        const btnEl = screen.getByRole('button', { name: "Increment" })
        expect(btnEl).toBeInTheDocument()
    })

    it('renders count of 0', () => {
        render(<Count />)

        const h1El = screen.getByRole('heading')
        expect(h1El).toHaveTextContent('0')

    })


})