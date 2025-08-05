import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import FoodBanner from './FoodBanner';
import SearchResults from './SearchResults';
import { useEffect, useState } from 'react';

function App() {
  const [searchString, setSearchString] = useState("Joe");
  /*useEffect(() => {
    console.log(searchString);
  }, [searchString])*/
  return (
    <Router>
      <div className="App">
        <FoodBanner />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home setSearchString={setSearchString}/>
            </Route>
            <Route path='/search'>
              <SearchResults searchString={searchString}/>
            </Route>
            {/*<Route path='/recipe/:id'>
              <RecipeInfo />
            </Route>*/}
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
