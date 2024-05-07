import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useLanguage } from '../../context/LanguageContext'; 


const Header = () => {
  const favoritesCount = useSelector(state => state.favorites.favorites.length);
  const { language, changeLanguage } = useLanguage(); 

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
        Movie App
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
            Movies
            </Link>
            <Link className="nav-link" to="/add-game">
              Add Movie
            </Link>
            <Link className="nav-link" to="/Favorites">
              Favorites <span className="badge bg-secondary">{favoritesCount}</span>
            </Link>
            <Link className="nav-link" to="/Register">
            Register 
            </Link>
          </div>
        </div>
      </div>
      
      <div>
        <select className="btn btn-danger" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </nav>
  );
};

export default Header;

// Install react-router-dom
// App.js => Routes => <Route path .. element />
// <Link to="" />