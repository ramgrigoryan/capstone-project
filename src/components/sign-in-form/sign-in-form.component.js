import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const initialData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(initialData);
  const { email, password } = formFields;

  const {setCurrentUser} = useContext(UserContext);

  const resetFormField = () => {
    setformFields(initialData);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In</span>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const {user} = await signInAuthUserWithEmailAndPassword(
              email,
              password
            );
            setCurrentUser(user);
            resetFormField();
          } catch (error) {
            switch (error.code) {
              case "auth/user-not-found":
                alert("No user with this email");
                break;
              case "auth/wrong-password":
                alert("Wrong password");
                break;
              case "auth/too-many-requests":
              alert("To many login attempts. Please,try later");
              break;
            }
            console.log(error);
          }
        }}
      >
        <FormInput
          label="Email"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
