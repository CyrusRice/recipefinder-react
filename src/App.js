import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import FoodBanner from './FoodBanner';
import SearchResults from './SearchResults';
import RecipeInfo from './RecipeInfo';
import { useState } from 'react';

function App() {
  const [searchString, setSearchString] = useState("Joe");
  
  return (
    <Router>
      <div className="App">
        <FoodBanner />
        <div className="content">
          <Switch>
            <Route exact path='/recipefinder-react'>
              <Home setSearchString={setSearchString}/>
            </Route>
            <Route exact path='/recipefinder-react/search'>
              <SearchResults searchString={searchString}/>
            </Route>
            <Route exact path='/recipefinder-react/recipe/:id'>
              <RecipeInfo />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;