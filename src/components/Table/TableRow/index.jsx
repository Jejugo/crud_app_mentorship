import React, { useState } from 'react';

const TableRow = ({ item }) => {
  console.log('item', item);

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
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
          {showEdit && (
            <EditEmployee
              showEdit={showEdit}
              employeeData={item}
            />
          )}
          <Button onClick={() => setHandleDelete((prevState) => !prevState)}>
            Delete
          </Button>
          {handleDelete && <deleteEmployee handleDelete={handleDelete} />}
        </Flex>
      </td>
    </tr>
  );
}

export default TableRow