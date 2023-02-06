import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Home } from "./pages/home/home";
function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={< Home />} />
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={< Register />} />
      </Routes>
    </>
  );
}

export default App;
