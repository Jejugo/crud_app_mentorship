import Button from "../Button";
import Flex from "../containers/Flex";
import styled from "styled-components";

const StyledTable = styled.table`
  tr:nth-child(even) {
    background-color: #eee;
  }
  width: 80vw;
  text-align: center;
`;

export default function Table( {employeesData} ){

    return(
        <StyledTable>
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
                <tr>
                    <td>
                        {item.id}
                    </td>
                    <td>
                        {item.firstName}
                    </td>
                    <td>
                        {item.lastName}
                    </td>
                    <td>
                        {item.email}
                    </td>
                    <td>
                        {item.salary}
                    </td>
                    <td>
                        {item.date}
                    </td>
                    <td>
                        <Flex gap="10px" justifyContent="center">
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </Flex>
                    </td>
                </tr>
              )) 
            }
            
        </StyledTable>
    )
}