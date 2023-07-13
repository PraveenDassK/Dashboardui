import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Routes from "./routes/routes";
function App() {
  // const navigate = useNavigate();
  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;
