import { BrowserRouter } from "react-router-dom";
import AuthContextP from "./context/AuthContext";
import AppRoutes from "./routers/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextP>
          <div className="App">
            <div className="flex flex-col font-sans text-brand-navy selection:bg-brand-orange selection:text-white">
              <NavBar />
              <AppRoutes />
            </div>
          </div>
        </AuthContextP>
      </BrowserRouter>
    </>
  );
}

export default App;
