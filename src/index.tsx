import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/auth/Login";
import ItemsContainer from "./components/ItemsContainer";
import Register from "./components/auth/Register";
import SearchResults from './components/SearchResults';
import TvDetails from "./components/details/TvDetails";
import MovieDetails from "./components/details/MovieDetails";
import UserProfile from './components/user/UserProfile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route path={''} element={<ItemsContainer />} />
        <Route path={'search'} element={<SearchResults />} />
        <Route path={'tv/:id'} element={<TvDetails />} />
        <Route path={'movie/:id'} element={<MovieDetails />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
        <Route path={'me'} element={<UserProfile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>
);