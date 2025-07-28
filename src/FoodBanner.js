import burger from './img/burger.png';
import pizza from './img/pizza.png';
import pancakes from './img/pancakes.png';
import spaghetti from './img/spaghetti.png';

const FoodBanner = () => {
  return ( 
  <div>
    <ul className="images">
      <li className="burger"><img src={burger} alt="burger" /></li>
      <li className="pizza"><img src={pizza} alt="pizza" /></li>
      <li className="pancakes"><img src={pancakes} alt="pancakes" /></li>
      <li className="spaghetti"><img src={spaghetti} alt="spaghetti" /></li>
    </ul>
    <h1 id='website-title'>Recipe Finder</h1>
  </div>
   );
}
 
export default FoodBanner;