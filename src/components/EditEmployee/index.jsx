import React from 'react'
import * as S from './EditEmployee.styles'
export default function EditEmployee( {handleEdit, employeeData} ) {
  console.log('employeeData: ', employeeData)
    return (
      <S.StyledEditEmployee>
        <input type="text" value={employeeData.firstName} />
        <button onClick={handleEdit}>Edit</button>
      </S.StyledEditEmployee>
    )
}
