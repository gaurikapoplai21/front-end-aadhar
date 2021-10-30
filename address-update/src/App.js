import "./App.css";
import Login from "./components/Login.js";
import RequesterDashboard from "./components/RequesterDashboard.js";
import LandlordDashboard from "./components/LandlordDashboard.js";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <RequesterDashboard />
      {/* <LandlordDashboard /> */}
    </div>
  );
}

export default App;
