import { useEffect } from "react";
import SearchForm from "./SearchForm";

const Home = ({setSearchString}) => {
  return ( 
    <div className="home">
      <p id="description">Use this website to find recipes based on your desired ingredients</p>
      <SearchForm setSearchString={setSearchString}/>
    </div>
   );
}
 
export default Home;