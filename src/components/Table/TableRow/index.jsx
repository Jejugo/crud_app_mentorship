import Button from "../../Button";
import Flex from "../../containers/Flex";

const TableRow = ({ item, onPrimaryAction, onSecondaryAction }) => {


  return (
    <tr>
      <td>{item.id}</td>
      <td style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100px", padding: '10px'}}>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.salary}</td>
      <td>{item.date}</td>
      <td>
        <Flex gap="10px" justifyContent="center">
          <Button onClick={() => onPrimaryAction(item)}>
            Edit
          </Button>
          <Button onClick={() => onSecondaryAction(item)}>
            Delete
          </Button>
        </Flex>
      </td>
    </tr>
  );
}

export default TableRow