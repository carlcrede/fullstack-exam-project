import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App mx-10 min-h-screen">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
