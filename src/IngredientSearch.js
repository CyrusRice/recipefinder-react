const IngredientSearch = () => {
  const addIngredient = (e) => {
    e.preventDefault();
     // Clicking add ingredient button
    const ingred_arr = document.getElementsByClassName("ingredient");
    const new_ingred = document.createElement("input");
    new_ingred.type = "text";
    new_ingred.className = "ingredient";
    new_ingred.id = "ingredient-" + (ingred_arr.length + 1);
    new_ingred.placeholder = "ingredient " + (ingred_arr.length + 1);
    ingred_arr[ingred_arr.length - 1].insertAdjacentElement("afterend", new_ingred);
    ingred_arr[ingred_arr.length - 2].insertAdjacentHTML("afterend", "<br><br>");
  }

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
      <input type="button" id="add-ingredient" value="+" onClick={addIngredient} />
      <br className="ingred-break" /><br className="ingred-break" />
    </div>
   );
}
 
export default IngredientSearch;