import React, { useState } from "react";
import Button from "../Button";
import Table from "../Table";
import Flex from "../containers/Flex";
import EditEmployee from "../../features/EditEmployee";
import DeleteEmployee from "../../features/DeleteEmployee";
import AddEmployee from "../../features/AddEmployee";
import Modal from "../Modal";
import { employeesData } from "../../data";

export default function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleShowEdit = (item) => {
    if (showEdit && item.id !== selectedRow.id) return;

    setShowEdit((prevState) => !prevState);
    setSelectedRow(item);
  };

  const handleShowDelete = (item) => {
    if (showDelete && item.id !== selectedRow.id) return;

    setShowDelete((prevState) => !prevState);
    setSelectedRow(item);
  };

  const handleShowAdd = () => {
    setShowAdd((prevState) => !prevState);
  };

  return (
    <>
      <Flex gap="10px">
        {/* Passando os elementos via Children */}
        <Button variant="primary" onClick={() => handleShowAdd()}>
          Add Employee
        </Button>
        <Button>Logout</Button>
      </Flex>
      <Table
        employeesData={employees}
        handleShowEdit={handleShowEdit}
        handleShowDelete={handleShowDelete}
      />
      <div>
        <Modal isOpen={showEdit} onClose={() => setShowEdit(false)}>
          <EditEmployee
            employeeData={selectedRow}
            onUnmount={() => setShowEdit(false)}
            setEmployees={setEmployees}
          />
        </Modal>
        <Modal isOpen={showDelete} onClose={() => setShowDelete(false)}>
          <DeleteEmployee
            item={selectedRow}
            onUnmount={() => setShowDelete(false)}
            setEmployees={setEmployees}
          />
        </Modal>
        <Modal isOpen={showAdd} onClose={() => setShowDelete(false)}>
          <AddEmployee
            item={selectedRow}
            onUnmount={() => setShowAdd(false)}
            setEmployees={setEmployees}
          />
        </Modal>
      </div>
    </>
  );
}
