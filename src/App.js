import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
const isAuth = JSON.parse(localStorage.getItem("userDetails"));
function App() {
  return (
    <div className="App">
      {!isAuth ? <Navbar /> : null}
      <AllRoutes />
      {!isAuth ? <Footer /> : null}
    </div>
  );
}

export default App;
