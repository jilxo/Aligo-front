import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { IndexPage } from './Pages/index';


function NotFound() {
  return <h1>404 Not Found</h1>;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
