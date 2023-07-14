import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Routes from "./routes/routes";
import { UserContextProvider } from "./context/UserContext";

function App() {
  // const navigate = useNavigate();
  return (
    <div style={{ width: "98%" }}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </div>
  );
}

export default App;
