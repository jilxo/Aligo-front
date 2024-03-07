import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { IndexPage } from './Pages/Index/indexPage.jsx';
import { NotFound } from "./Pages/NotFound";
import { PruebasComponentes } from "./Pages/components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/Pruebas" element={<PruebasComponentes/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
