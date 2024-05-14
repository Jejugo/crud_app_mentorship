import Button from "../../Button";
import Flex from "../../containers/Flex";
import EditEmployee from "../../EditEmployee";
import React, { useState } from 'react';

const TableRow = ({ item, setEmployeesData }) => {
  console.log('item', item);

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.salary}</td>
      <td>{item.date}</td>
      <td>
        <Flex gap="10px" justifyContent="center">
          <Button onClick={() => setShowEdit((prevState) => !prevState)}>
            Edit
          </Button>
          
          <Button onClick={() => setShowDelete((prevState) => !prevState)}>
            Delete
          </Button>
          {showDelete && <deleteEmployee showDelete={showDelete} />}
        </Flex>
      </td>
    </tr>
    {showEdit && (
        <EditEmployee
          setShowEdit={setShowEdit}
          employeeData={item}
          setEmployeesData={setEmployeesData}
        />
      )}
      </>
  );
}

export default TableRow