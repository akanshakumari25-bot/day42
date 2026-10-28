import LegacyDashboard from "./LegacyDashboard";
import ModernDashboard from "./ModernDashboard";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>React Query Comparison</h1>

      <div className="dashboard-container">
        <LegacyDashboard />
        <ModernDashboard />
      </div>
    </div>
  );
}

export default App;



