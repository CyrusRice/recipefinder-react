const IngredientSearch = () => {
  return ( 
    <div>
      <br className="ingred-break" /><br className="ingred-break" />
      <input type="text" className="ingredient" id="ingredient-1" placeholder="ingredient 1" />
      <br className="ingred-break" /><br className="ingred-break" />
      <input type="text" className="ingredient" id="ingredient-2" placeholder="ingredient 2" />
      <br className="ingred-break" /><br className="ingred-break" />
      <input type="text" className="ingredient" id="ingredient-3" placeholder="ingredient 3" />
      <br className="ingred-break" /><br className="ingred-break" />
      <input type="text" className="ingredient" id="ingredient-4" placeholder="ingredient 4" />
      <br className="ingred-break" /><br className="ingred-break" />
      <input type="button" id="add-ingredient" value="+" />
      <br className="ingred-break" /><br className="ingred-break" />
    </div>
   );
}
 
export default IngredientSearch;