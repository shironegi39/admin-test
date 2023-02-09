import { GrClose } from 'react-icons/gr';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Admin = (props) => {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>
        <GrClose onClick={() => props.destroyAdmin(props.id)} />
        <Link to={`/admins/${props.id}`}>
          <Button variant='info'>詳細</Button>
        </Link>
      </td>
    </tr>
  );
};
