import { Link } from "react-router-dom";

function User(props) {
  return (
    <>
      <li>
        <div>
          <h3>{props.user.name}</h3>
          <h3>{props.user.username}</h3>
          <Link
            to={{
              pathname: `/edit/${props.user.username}`,
              id: props.index,
            }}
          >
            <button>Edit</button>
          </Link>

          <button onClick={() => props.removeUser(props.index)}>Delete</button>
        </div>
      </li>
    </>
  );
}

export default User;
