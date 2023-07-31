import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CoffeeShopsPage from '../CoffeeShopsPage/CoffeeShopsPage';
import CoffeeShopDetailPage from '../CoffeeShopDetailPage/CoffeeShopDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState({});
  
  return (

    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<CoffeeShopsPage />} />
            <Route path="/coffeeshops/:coffeeShopName" element={<CoffeeShopDetailPage/>} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} />
      }
    </main>

  );
}