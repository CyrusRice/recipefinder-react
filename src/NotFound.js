import { Link } from "react-router-dom"

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2 className="sorry">Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/recipefinder-react">Back to the homepage...</Link>
    </div>
   );
}
 
export default NotFound;