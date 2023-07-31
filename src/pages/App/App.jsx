import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from '../../components/Add/Add';
import CoffeeShopsPage from '../CoffeeShopsPage/CoffeeShopsPage';
import CoffeeShopDetailPage from '../CoffeeShopDetailPage/CoffeeShopDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import axios from 'axios';
import './App.css';

export default function App() {
  const [user, setUser] = useState({});
  
  
  return (

    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/coffeeshops" element={<CoffeeShopsPage />} />
            <Route path="/createCS" element={<Add />} />
            <Route path="/details/:id" element={<CoffeeShopDetailPage />} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} />
      }
    </main>

  );
}