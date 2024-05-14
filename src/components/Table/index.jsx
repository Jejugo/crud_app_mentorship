import Button from "../Button";
import Flex from "../containers/Flex";
import { useEffect, useState } from "react";
import EditEmployee from "../EditEmployee";
import TableRow from "./TableRow";
import * as S from "./Table.styles"

export default function Table({employeesData}){
    return(
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
                <TableRow item={item}/>
              )) 
            }
            
        </S.StyledTable>
    )
}