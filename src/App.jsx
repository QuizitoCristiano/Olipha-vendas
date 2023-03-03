
import React from 'react';
import { MainLayout } from "./assets/layouts/MainLayout";
import { Home } from "./assets/pagehome/home";
import { Usercontato } from "./assets/contatos/usercontatos/usercontatos";
import { Logovendas } from "./assets/logovendas/item/vendas"
import { Quesomos } from './assets/configs/configquesomos';
import { Login } from './assets/pageslogin/indexlogin';
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/vendas' element={<Logovendas />} />
          <Route path='/Quesomos' element={<Quesomos />} />
          <Route path='/contatos' element={<Usercontato />} />
          <Route path='/' element={<Login />} />
        </Routes>

      </MainLayout>
    </BrowserRouter>
  )
}

export default App
