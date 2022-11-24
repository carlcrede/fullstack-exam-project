import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { getAuthToken } from './components/auth/Auth';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const [user, setUser] = useState(getAuthToken());
  
  useEffect(() => {
    setUser(getAuthToken());
  }, [])
  

  return (
    <div className="App mx-10 min-h-screen">
      <Header user={user} />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
