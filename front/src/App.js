import FormProducts from "./components/FormProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import FormCrops from "./components/FormCrops";
import AgroState from "./context/AgroState";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <AgroState>
      <div className="App">
        <Navbar />
        {/* <FormProducts />
        <FormCrops /> */}
      </div>
    </AgroState>
  );
}

export default App;
