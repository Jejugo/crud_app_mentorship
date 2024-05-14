import React from 'react'
import * as S from './EditEmployee.styles'
import { useState } from 'react'
export default function EditEmployee( {setShowEdit, employeeData, setEmployeesData} ) {
  const [employeeFirstName, setEmployeeFirstName] = useState(employeeData.firstName);
  const [employeeLastName, setEmployeeLastName] = useState(employeeData.lastName);
  const [employeeEmail, setEmployeeEmail] = useState(employeeData.email);
  const [employeeSalary, setEmployeeSalary] = useState(employeeData.salary);
  const [employeeDate, setEmployeeDate] = useState(employeeData.date);

  const saveData = (e) => {
    e.preventDefault();
    const employeeId = employeeData.id
    setEmployeesData((prevState) => {
      return prevState.map((item) => {
        if(item.id === employeeId) {
          return {
            ...item, // muda o que está abaixo, o resto permanece
            firstName: employeeFirstName,
            lastName: employeeLastName,
            email: employeeEmail,
            salary: employeeSalary,
            date: employeeDate
          }
        }
        return item
      })
    })
  }

  return (
    <S.StyledEditEmployee>
      <S.StyledContent onSubmit={saveData}>
        <S.StyledContentLabel>
          <label for="firstName">First Name: </label>
          <label for="lastName">Last Name: </label>
          <label for="email">Email: </label>
          <label for="salary">Salary: </label>
          <label for="date">Date: </label>
        </S.StyledContentLabel>
        <S.StyledContentRow>
          <input
            id='firstName'
            type="text"
            value={employeeFirstName}
            onChange={(e) => setEmployeeFirstName(e.target.value)}
          />
          <input
            id="lastName"
            type="text"
            value={employeeLastName}
            onChange={(e) => setEmployeeLastName(e.target.value)}
          />
          <input 
            id="email"
            type="email"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
          <input 
            id="salary"
            type="number"
            value={employeeSalary}
            onChange={(e) => setEmployeeSalary(e.target.value)}
          />
          <input 
            id="date"
            type="date"
            value={employeeDate}
            onChange={(e) => setEmployeeDate(e.target.value)}
          />
        </S.StyledContentRow>
      <button onClick={() => setShowEdit(false)}>Cancel</button>
      <button type="submit">Save</button>
      </S.StyledContent>
    </S.StyledEditEmployee>
  );
}
