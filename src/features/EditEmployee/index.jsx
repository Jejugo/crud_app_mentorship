import React, { useState } from 'react'

export default function EditEmployee({ employeeData, setEmployees, onUnmount }) {

  const [firstName, setFirstName] = useState(employeeData.firstName)
  const [lastName, setLastName] = useState(employeeData.lastName)
  const [salary, setSalary] = useState(employeeData.salary)
  const [date, setDate] = useState(employeeData.date)

  const handleEdit = (e) => {
    e.preventDefault()
    setEmployees((prevEmployees) => {
      const newEmployees = prevEmployees.map((employee) => {
        if (employee.id === employeeData.id) {
          return { ...employee, firstName, lastName, salary, date }
        }
      
        return employee
      })
      return newEmployees
    })
    }

    return (
        <form onSubmit={handleEdit}>
        <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', gap: '10px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <label for="firstName">First Name</label>
            <input type="text" value={firstName} style={{width: '50%'}} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <label for="lastName">Last Name</label>
            <input type="text" value={lastName} style={{width: '50%'}} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <label for="salary">Salary</label>
            <input type="number" value={salary} style={{width: '50%'}} onChange={(e) => setSalary(e.target.value)}/>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <label for="lastName">Date</label>
            <input type="date" value={date} style={{width: '50%'}} onChange={(e) => setDate(e.target.value)}/>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <button type="submit">Edit</button>
          <button onClick={() => onUnmount()}>Cancel</button>
        </div>
        </form>
    )
}
