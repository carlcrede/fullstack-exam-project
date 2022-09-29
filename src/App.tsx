import {Link, Outlet, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import Login from "./login";
import Signup from "./register";

function App() {

  return (
    <div className="App">
      <Header />
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
        >
            <Link to="/login">Login</Link> |{" "}
            <Link to="/signup">Register</Link>
        </nav>
        <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
