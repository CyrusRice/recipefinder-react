import RecipeNameSearch from "./RecipeNameSearch";
import IngredientSearch from "./IngredientSearch";
import { useState } from "react";

const SearchForm = () => {
  const [isSearchByIngredients, setIsSearchByIngredients] = useState(true);

  return ( 
    <form id="ingredients">
      <input type="button" value="Search by ingredients" 
      id="search-by-ingredients" onClick={() => {setIsSearchByIngredients(true)}}/>
      <input type="button" value="Search by recipe name" 
      id="search-by-recipe-name" onClick={() => {setIsSearchByIngredients(false)}}/>
      { isSearchByIngredients && <IngredientSearch /> }
      { !isSearchByIngredients && <RecipeNameSearch /> }
      <input type="submit" value="Find Recipes" id="submit" />
    </form>
   );
}
 
export default SearchForm;