import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IndexPage } from './Pages/Index/indexPage.jsx';
import BlueTeamPage from './Pages/blue_team/BlueTeamPage.jsx'
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/blueteam" element={<BlueTeamPage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
