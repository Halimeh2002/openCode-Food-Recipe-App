import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  
  const { color, changeColor } = useTheme();
    
  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor('red')}>
        <Link to="/" className="brand">
          <h1>openCode Food</h1>
        </Link>

        <SearchBar />

        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
