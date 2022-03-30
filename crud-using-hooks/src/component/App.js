import React, { useState } from "react";
import UserForm from "../component/UserForm";
import User from "../component/User";

function App() {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const addUser = (name, username) => {
    let obj = { name, username };
    setData(data.concat(obj));
    localStorage.setItem("data", JSON.stringify(data.concat(obj)));
  };

  const removeUser = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
  };

  const editUser = (index) => {
    const newUsers = [...data];
    console.log(newUsers[index]);
    const user = newUsers[index];
    console.log(user.name);
  };

  return (
    <>
      <div>
        <h1>User List</h1>
        <UserForm addUser={addUser} />

        <ul>
          {data.length !== 0 && (
            <li>
              {data.length > 1
                ? `${data.length} Users added`
                : `${data.length} User added`}{" "}
            </li>
          )}
          {data.map((user, index) => (
            <User
              key={index}
              index={index}
              user={user}
              removeUser={removeUser}
              editUser={editUser}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
