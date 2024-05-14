import TableRow from "./TableRow";
import * as S from "./Table.styles";

export default function Table({ employeesData, handleShowEdit, handleShowDelete }) {
  return (
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
        {employeesData.map((item) => (
          <TableRow
            key={item.id}
            item={item}
            onPrimaryAction={handleShowEdit}
            onSecondaryAction={handleShowDelete}
          />
        ))}
      </S.StyledTable>

    </>
  );
}
