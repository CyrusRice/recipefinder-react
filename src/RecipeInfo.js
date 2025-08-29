import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const RecipeInfo = () => {
  const { id } = useParams();
  const { data: recipe, error, isPending } = useFetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=64bf1bceb4104664bbdfc0c611b195f6`);
  const history = useHistory();

   return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      {recipe && <div>
        <a href="/recipefinder-react" id="home-link">Back to search</a>
        <div id="results-link" onClick={function() { history.push('/recipefinder-react/search') }}>Back to results</div>
        <div className="recipe">
          <p id="recipe-title">{recipe.title}</p>
          <img src={recipe.image} alt={'image of ' + recipe.title} id="recipe-img" />
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
        </div>
      </div>}
    </div>
   );
}
 
export default RecipeInfo;