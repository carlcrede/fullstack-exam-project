import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';

function App() {
  return (
    <div className="App bg-[#060D17]">
      <Header />
      <Routes>
        <Route path='/' element={<ItemsContainer />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
