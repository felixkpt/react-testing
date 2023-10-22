import React from 'react'

type Props = {}

const Form = (props: Props) => {
    return (
        <div>
            <div data-testid="topelement">This has special testing id</div>
            <div>
                <span title='close'><i>X</i> close</span>
            </div>
            <form action="#">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Random man image" />
                <h3>Personal details form</h3>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"></textarea>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <select name='location' id='location'>
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="terms">I accept the terms</label>
                    <input type="checkbox" name='terms' id='terms' />
                </div>
            </form>
        </div>
    )
}

export default Form