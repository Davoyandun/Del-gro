import "bootstrap/dist/css/bootstrap.min.css";
import AgroState from "./context/AgroState";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./pages/Home";
import TableProducts from "./components/admin/TableProducts";

import TableCrops from "./components/admin/TableCrops";
import TableBrands from "./components/admin/TableBrands";
import TablePests from "./components/admin/TablePests";
import TablePosts from "./components/admin/TablePosts";
import TableCarrusel from "./components/admin/TableCarrusel";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";
import Products from "./pages/Products"
import Details from "./pages/Details";

function App() {
  return (
    <AgroState>
      <BrowserRouter>
        <Routes>
          <Route path="/home/*" element={<NavBar />}>
            <Route path="" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:idProduct" element={<Details />} />

          </Route>
        </Routes>
        <Routes>
          <Route path="/admin/*" element={<Admin />}>
            <Route path="" element={<TableProducts />} />
            <Route path="crops" element={<TableCrops />} />
            <Route path="brands" element={<TableBrands />} />
            <Route path="pests" element={<TablePests />} />
            <Route path="posts" element={<TablePosts />} />
            <Route path="carrusel" element={<TableCarrusel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AgroState>
  );
}

export default App;
