import { GrClose } from 'react-icons/gr';

export const Admin = (props) => {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>
        <GrClose onClick={() => props.destroyAdmin(props.id)} />
      </td>
    </tr>
  );
};
