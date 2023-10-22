import { render, screen } from '@testing-library/react';

import Languages from './Languages';


describe('Languages', () => {

    const languages = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'VUE JS']

    it('has languages list el', () => {

        render(<Languages languages={languages} />)

        const listEl = screen.getByRole('list')

        expect(listEl).toBeInTheDocument()

    })

    it('renders languages list correctly', () => {

        render(<Languages languages={languages} />)

        const listItems = screen.getAllByRole('listitem')

        expect(listItems).toHaveLength(languages.length)
    })

    it('renders login btn', () => {

        render(<Languages languages={languages} />)

        const loginEl = screen.getByRole('button', { name: "Login" })

        expect(loginEl).toBeInTheDocument()
    })

    it('test that it does not render start course btn', () => {

        render(<Languages languages={languages} />)

        const courseEl = screen.queryByRole('button', { name: "Start Course" })

        expect(courseEl).not.toBeInTheDocument()
    })

    it('test that render start course btn after 2 seconds', async () => {

        render(<Languages languages={languages} />)

        const courseEl = await screen.findByRole('button', { name: "Start Course" }, { timeout: 2005 })

        expect(courseEl).toBeInTheDocument()
    })
})