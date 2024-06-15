import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlantDataFetch() {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/species-list?key=sk-JuFM666b2f4d3b8905917&q=${query}&edible=true`);
                console.log(`https://perenual.com/api/species-list?key=sk-JuFM666b2f4d3b8905917&q=${query}`)
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            }
        }

        if (query) {
          console.log("value of query", query)
            fetchData();
        }
    }, [query]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("hello")
        console.log ("searchTerm is",searchTerm)
        setQuery(searchTerm);
    };

    return (
        <div>
            <h1>API Data</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for a plant"
                />
                <button type="submit">Search</button>
            </form>
            {error && <p style={{ color: 'red' }}>Error fetching data: {error}</p>}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default PlantDataFetch;
