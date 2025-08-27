import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const SearchResults = (searchString) => {
  const history = useHistory();
  // Fetch results using api call
  const { data: recipes, error, isPending } = useFetch(searchString.searchString);

   return ( 
    <div>
      {recipes && <div>
        <a href="/" id="home-link">Back to search</a>
        <div className="container" id="container">
          {recipes.results.map((recipe, index) => (
            <div className={"item item-" + index} id={recipe.id} key={index} onClick={function() { history.push('/recipe/' + recipe.id) }}>
              <p className={"title title-" + index}>{recipe.title}</p>
              <img src={recipe.image} className={"img img-" + index} />
            </div>
          ))}
        </div>
      </div>}
    </div>
   );
}
 
export default SearchResults;