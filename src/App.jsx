import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { IndexPage } from './Pages/index';
import { NotFound } from "./Pages/NotFound";
import { PruebasComponentes } from "./Pages/components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/Pruebas" component={PruebasComponentes}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
