function EditUser(props) {

    
  return (      
    <>
      <h2>User Form</h2>

      <form>
        <input type="text" name="name" placeholder="name" id="name" required />
        <input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          required
          onChange={props.hamdleChange}
        />

        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default EditUser;
