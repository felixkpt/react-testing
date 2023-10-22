import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Testing Welcome component', () => {

    test('it has Welcome text inside hi heading', () => {

        render(<Welcome />)

        const h1Elem = screen.getByRole('heading', { level: 1 })

        expect(h1Elem).toHaveTextContent('Welcome')
    })

    test('welcome component renders with lang prop', () => {

        const lang = 'En/US'

        render(<Welcome lang={lang} />)

        const h1Elem = screen.getByRole('heading', { level: 1 })

        expect(h1Elem).toHaveTextContent(`Welcome ${lang}`)
    })
})