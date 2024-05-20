import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import * as S from "./Table.styles"
import EditEmployee from "../EditEmployee";

export default function Table({employeesData, setEmployeesData}){

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (item) => {
    setIsEditOpen((prevState) => {
      if(!prevState) {
        setSelectedRow(item);
        return true
      }
      return prevState
    })
  }

  return(
    <>
      <S.StyledTable>
          <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th>Actions</th>
          </tr>
          { 
            employeesData.map((item) => (
              <TableRow item={item} onEditClick={handleRowClick} />
            )) 
          }
          
      </S.StyledTable>
      <div>
        {isEditOpen && (
          <EditEmployee
            onClose={() => setIsEditOpen(false)}
            employeeData={selectedRow}
            setEmployeesData={setEmployeesData}
          />
        )}
      </div>
    </>
  )
}