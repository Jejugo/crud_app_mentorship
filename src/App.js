import "./App.css";
import Button from "./components/Button";
import MainLayout from "./layouts/MainLayout";
import Flex from "./components/containers/Flex";
import { employees } from "./data";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const[employeesData, setEmployeesData] = useState(employees)

  return (
    <MainLayout>
      <h1>Employee Management Software</h1>
      <Flex gap="10px">
        {/* Passando os elementos via Children */}
        <Button variant="primary">Add Employee</Button>
        <Button>Logout</Button>
        </Flex>
      {/* Passando os elementos via props */}
      <Table employeesData={employeesData} setEmployeesData={setEmployeesData}/>
    </MainLayout>
  );
}

export default App;
