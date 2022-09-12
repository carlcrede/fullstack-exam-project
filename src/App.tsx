import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsContainer from './components/ItemsContainer';

function App() {
  return (
    <div className="App bg-[#060D17]">
      <Header />
      <ItemsContainer />
      <Footer />
    </div>
  );
}

export default App;
