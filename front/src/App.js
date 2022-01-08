import "bootstrap/dist/css/bootstrap.min.css";
import AgroState from "./context/AgroState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./pages/Home";
import TableProducts from './components/admin/TableProducts'

import TableCrops from "./components/admin/TableCrops";
import TableBrands from "./components/admin/TableBrands";
import TablePests from "./components/admin/TablePests";

function App() {
  return (
    <AgroState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<TableProducts />} />
          <Route path="/admin/crops" element={<TableCrops />} />
          <Route path="/admin/brands" element={<TableBrands />} />
          <Route path="/admin/pests" element={<TablePests />} />

          
     

        </Routes>
      </BrowserRouter>
    </AgroState>
  );
}


export default App;
