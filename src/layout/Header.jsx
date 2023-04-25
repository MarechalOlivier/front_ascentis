import { Link } from "react-router-dom";

const Header =() => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/header">Blogs</Link>
          </li>
          <li>
            <Link to="/footer">Contact</Link>
          </li>
        </ul>
      </nav>
    </>    
  )};
    
    
    return(
        <h1>Header</h1>
    )


export default Header;