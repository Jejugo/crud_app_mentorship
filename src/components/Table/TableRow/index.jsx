import Button from "../../Button";
import Flex from "../../containers/Flex";
import React, { useState } from 'react';

const TableRow = ({ item, setEmployeesData, onEditClick }) => {

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
          <Button onClick={() => onEditClick(item)}>
            Edit
          </Button>
          
          {/* <Button onClick={() => setShowDelete((prevState) => !prevState)}>
            Delete
          </Button>
          {showDelete && <deleteEmployee showDelete={showDelete}/>} */}
        </Flex>
      </td>
    </tr>
      </>
  );
}

export default TableRow
