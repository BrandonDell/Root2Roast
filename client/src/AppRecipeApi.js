import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './components/RecipeApi';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('initial-query'); // Set an initial query to prevent empty fetch on first render

    const getRecipes = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${query}`);
            console.log(response.data);
            setRecipes(response.data.recipe);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        if (query) {
            getRecipes();
        }
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    };

    return (
        <div className="App">
            <form onSubmit={getSearch} className='search-form'>
                <input className='search-bar' type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <button className='search-button' type="submit">Search</button>
            </form>
            <div className='recipes'>
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
