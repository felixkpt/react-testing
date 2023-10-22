// MyComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/portraits/men/75.jpg').then((response) => {
            // setData(response.data);
        });
    }, []);

    return (
        <div>
            <h1>data list</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
