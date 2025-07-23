import burger from './img/burger.png';
import pizza from './img/pizza.png';
import pancakes from './img/pancakes.png';
import spaghetti from './img/spaghetti.png';

const FoodBanner = () => {
  return ( 
  <ul className="images">
    <li className="burger"><img src={burger} alt="burger" /></li>
    <li className="pizza"><img src={pizza} alt="pizza" /></li>
    <li className="pancakes"><img src={pancakes} alt="pancakes" /></li>
    <li className="spaghetti"><img src={spaghetti} alt="spaghetti" /></li>
  </ul>
   );
}
 
export default FoodBanner;

// Figure out how to use images in react (have web page open 
// that should answer this)