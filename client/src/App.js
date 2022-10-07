import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
const token = useSelector((store) => store.authReducer.token);

  return (
    <div className="App">
      {!token && <Navbar />}
      <AllRoutes />
      {!token && <Footer />}
    </div>
  );
}

export default App;
