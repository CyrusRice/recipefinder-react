import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "./useFetch";

const RecipeInfo = () => {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=64bf1bceb4104664bbdfc0c611b195f6`);

   return (
    <div>
      {recipe && <div className="recipe">
      <p id="recipe-title">{recipe.title}</p>
      <img src={recipe.image} id="recipe-img" />
      <p>Ingredients</p>
      <ul id="ingred-container">
        {recipe.extendedIngredients.map((ingred, index) => (
          <li className="ingred-item" key={index}>{ingred.original}</li>
        ))}
      </ul>
      <p>Instructions</p>
      <ul id="recipe-container">
        {recipe.analyzedInstructions[0].steps.map((instruction, index) => (
          <li className="recipe-instruction" key={index}>{instruction.step}</li>
        ))}
      </ul>
      </div>}
    </div>
   );
}
 
export default RecipeInfo;