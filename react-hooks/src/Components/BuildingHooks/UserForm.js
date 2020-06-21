import React from "react";
import { useInput } from "../../Hooks";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" name="" id="firstname" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" name="" id="lastname" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
