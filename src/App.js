import "./App.css";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <MainLayout>
      <h1>Employee Management Software</h1>
      <Dashboard />
    </MainLayout>
  );
}

export default App;
