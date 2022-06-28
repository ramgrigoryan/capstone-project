import { async } from "@firebase/util";
import { useState } from "react";

const initialData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(initialData);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up for free !</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
