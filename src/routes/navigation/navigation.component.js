import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/logo/crown.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  //UseContext as a Hook tells this component whenever value inside useContext updates, re-render,
  //because we are leveragin currentUser value
  //inside of out component and we could be using it. And UserContext changes, because useState changes in UserProvider component.
  //Any component that is listening for currentUser should be re-rendered
  const { currentUser} = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="nav-logo-container" to="/">
            <CrwnLogo />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
