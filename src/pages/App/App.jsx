import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from '../../components/Add/Add';
import { getUser } from '../../utilities/users-service';
import CoffeeShopsPage from '../CoffeeShopsPage/CoffeeShopsPage';
import CoffeeShopDetailPage from '../CoffeeShopDetailPage/CoffeeShopDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import LoginPage from '../LoginPage/LoginPage';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  
  return (

    <main>
      {/* { user ? */}
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/coffeeshops" element={<CoffeeShopsPage />} />
            <Route path="/createCS" element={<Add />} />
            <Route path="/details/:id" element={<CoffeeShopDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>

  );
}