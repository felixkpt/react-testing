import React from 'react'

type Props = {
    lang?: string
}

const Welcome = ({ lang }: Props) => {
    return (
        <div>
            <h1>Welcome {lang}</h1>
        </div>
    )
}

export default Welcome