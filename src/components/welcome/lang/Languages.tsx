import { useEffect, useState } from "react"

type Props = {
    languages: string[]
}

const Languages = ({ languages }: Props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setIsLoggedIn(true)
        }, 2000);
    }, [])

    return (
        <div>
            <h1>Languages</h1>
            <ul>{languages.map(language => <li key={language}>{language}</li>)}</ul>
            {isLoggedIn ? <button>Start Course</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    )
}

export default Languages