import useFetch from "./useFetch";

const SearchResults = (searchString) => {
  // Fetch results using api call
  console.log("rendering");
  const { data: recipes, error, isPending } = useFetch(searchString);
  const displaySearchResults = (data) => {
    console.log("data");
    console.log(data);
    // Create Div element and insert title and image for each result
    const container = document.getElementById("container");
    for (let i = 0; i < data.results.length; i++) {
      console.log(i);
      const div = document.createElement("div");
      div.className = "item item-" + i;
      div.id = data.results[i].id;

      const title = document.createElement("p");
      const text = document.createTextNode(data.results[i].title);
      title.appendChild(text);
      title.className = "title title-" + i;

      const img = document.createElement("img");
      img.src = data.results[i].image;
      img.className = "img img-" + i;

      div.appendChild(title);
      div.appendChild(img);

      container.appendChild(div);
    }
    return true;
  }

  return ( 
    <div className="container" id="container">{
      recipes && displaySearchResults(recipes)
    }</div>
   );
}
 
export default SearchResults;

// Figure out how to dynamically display search results