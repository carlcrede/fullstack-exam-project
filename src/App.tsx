import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from "./navbar";

function App() {
  return (
    <div className="App mx-10">
      <Header />
        <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
