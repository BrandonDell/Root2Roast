import React from 'react';

const Recipe = ({ title, image, ingredients }) => {
    // 
  return (
    // goes inside recipeapi in layout
      <div className="recipe">
          <h2>{title}</h2>
          <ol>
              {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>
              ))}
          </ol>
          <img className="recipeImage" src={image} alt="" />
      </div>
  )
}

export default Recipe