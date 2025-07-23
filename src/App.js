import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import FoodBanner from './FoodBanner';

function App() {
  return (
    <Router>
      <div className="App">
        <FoodBanner />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            {/*<Route path='/search'>
              <SearchResults />
            </Route>
            <Route path='/recipe/:id'>
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
