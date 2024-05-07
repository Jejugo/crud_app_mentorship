import "./App.css";
import Button from "./components/Button";
import MainLayout from "./layouts/MainLayout";
import Flex from "./components/containers/Flex";
import { employeesData } from "./data";
import Table from "./components/Table";

function App() {
  return (
    <MainLayout>
      <h1>Employee Management Software</h1>
      <Flex gap="10px">
        {/* Passando os elementos via Children */}
        <Button variant="primary">Add Employee</Button>
        <Button>Logout</Button>
        </Flex>
      {/* Passando os elementos via props */}
      <Table employeesData={employeesData} />
    </MainLayout>
  );
}

export default App;
