import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"fotos de"} />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
