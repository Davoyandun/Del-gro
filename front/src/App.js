import "bootstrap/dist/css/bootstrap.min.css";
import AgroState from "./context/AgroState";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

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
import Products from "./pages/Products";
import Details from "./pages/Details";
import Blog from "./pages/Blog";
import DetailsBlog from "./pages/DetailsBlog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import FormLogin from "./components/FormLogin";

let cookies = new Cookies();

const auth = cookies.get("auth");



function App() {
  return (
    <AgroState>
      <BrowserRouter>
        <Routes>
          <Route path="home/*" element={<NavBar />}>
            <Route path="" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:idProduct" element={<Details />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:idBlog" element={<DetailsBlog />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="prueba" element={<FormLogin />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="admin/*" element={<Admin />}>
            <Route
              path=""
              element={auth ? <TableProducts /> : <Navigate to="/home" />}
            />
            <Route
              path="crops"
              element={auth ? <TableCrops /> : <Navigate to="/home" />}
            />
            <Route
              path="brands"
              element={auth ? <TableBrands /> : <Navigate to="/home" />}
            />
            <Route
              path="pests"
              element={auth ? <TablePests /> : <Navigate to="/home" />}
            />
            <Route
              path="posts"
              element={auth ? <TablePosts /> : <Navigate to="/home" />}
            />
            <Route
              path="carrusel"
              element={auth ? <TableCarrusel /> : <Navigate to="/home" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AgroState>
  );
}

export default App;
