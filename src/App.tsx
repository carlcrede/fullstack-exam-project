import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import Login from "./login";

function App() {
  return (
    <div className="App bg-[#060D17]">
      <Header />
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/'} element={<ItemsContainer />} />
        <Route path={'tv/:id'} element={<TvDetails />} />
        <Route path={'movie/:id'} element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
