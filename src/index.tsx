import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./login";
import Signup from "./register";
import ItemsContainer from "./components/ItemsContainer";
import TvDetails from "./components/TvDetails";
import MovieDetails from "./components/MovieDetails";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            // TODO

            <Route path={'/'} element={<App />}>
                <Route path={'/'} element={<ItemsContainer />}/>
                <Route path={'tv/:id'} element={<TvDetails />} />
                <Route path={'movie/:id'} element={<MovieDetails />} />
                <Route path={'login'} element={<Login />} />
                <Route path={'signup'} element={<Signup />} />
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
