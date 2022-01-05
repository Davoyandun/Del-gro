import "bootstrap/dist/css/bootstrap.min.css";
import AgroState from "./context/AgroState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./pages/Home";
import TableProducts from './components/admin/TableProducts'

function App() {
  return (
    <AgroState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<TableProducts />} />
          
     

        </Routes>
      </BrowserRouter>
    </AgroState>
  );
}


export default App;
