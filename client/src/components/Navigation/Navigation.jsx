//import the necessary dependencies

import { Link as RouterLink, useLocation } from "react-router-dom"; //import the Link component from react-router-dom and the useLocation hook
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./Navigation.css";

//function that renders the navigation bar
function Navigation() {
  const currentPage = useLocation().pathname; //use the useLocation hook to get the current page's pathname

  return (
    <div className="breadcrumbs-container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
        <Link
          component={RouterLink}
          to="/Lakes"
          underline="hover"
          color="inherit"
          className={currentPage === "/Lakes" ? "nav-link active" : "nav-link"}
        >
          Lakes
        </Link>

        <Link
          component={RouterLink}
          to="/Lakes"
          underline="hover"
          color="inherit"
          className={currentPage === "/BlogPage" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
        <Link
          component={RouterLink}
          to="/Login"
          underline="hover"
          color="inherit"
          className={currentPage === "/Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
        <Link
          component={RouterLink}
          to="/Signup"
          underline="hover"
          color="inherit"
          className={currentPage === "/Signup" ? "nav-link active" : "nav-link"}
        >
          Sign-up
        </Link>
      </Breadcrumbs>
    </div>
  );
}

//export the Navigation component
export default Navigation;
