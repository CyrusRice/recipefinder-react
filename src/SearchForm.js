import RecipeNameSearch from "./RecipeNameSearch";
import IngredientSearch from "./IngredientSearch";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = ({setSearchString}) => {
  const [isSearchByIngredients, setIsSearchByIngredients] = useState(true);
  const history = useHistory();
  // When search clicked, set api call string based on
  // whether we searched by ingreds or recipe name
  const handleClick = (e) => {
    e.preventDefault();
    let fullSearchString = "https://api.spoonacular.com/recipes/complexSearch?";
    if (isSearchByIngredients) {
      const ingredients = document.getElementsByClassName("ingredient");
      fullSearchString += "includeIngredients=";
      for (let i = 0; i < ingredients.length; i++) {
        fullSearchString += ingredients[i].value + ",+";
      }
    } else {
      fullSearchString += 'titleMatch=' + document.getElementById("recipe-name").value;
    }
    fullSearchString += "&number=10&instructionsRequired=true&apiKey=64bf1bceb4104664bbdfc0c611b195f6";
    setSearchString(fullSearchString);
    history.push('/recipefinder-react/search');
  }

  return ( 
    <form id="ingredients">
      <input type="button" value="Search by ingredients" 
      id="search-by-ingredients" onClick={() => {setIsSearchByIngredients(true)}}/>
      <input type="button" value="Search by recipe name" 
      id="search-by-recipe-name" onClick={() => {setIsSearchByIngredients(false)}}/>
      { isSearchByIngredients && <IngredientSearch /> }
      { !isSearchByIngredients && <RecipeNameSearch /> }
      <input onClick={handleClick} type="submit" value="Find Recipes" id="submit" />
    </form>
   );
}
 
export default SearchForm;