import FormProducts from "./components/FormProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import FormCrops from "./components/FormCrops";
import AgroState from "./context/AgroState";
import Home from "./pages/Home";
import FormPests from "./components/FormPests";
import FormBrands from "./components/FormBrands";
import FormCarrusel from "./components/FormCarrusel";
import FormPosts from "./components/FormPosts";

function App() {
  return (
    <AgroState>
      <div className="App">
        <Home />
        <FormProducts />
        <FormCrops />
        <FormPests />
        <FormBrands />
        <FormCarrusel />
        <FormPosts />
      </div>
    </AgroState>
  );
}

export default App;
