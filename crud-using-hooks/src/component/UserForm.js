import React, { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(name, username);
    setName("");
    setUsername("");
  };

  return (
    <>
      <section>
        <h2>User Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <input type="submit" value="submit" />
        </form>
      </section>
    </>
  );
}

export default UserForm;
