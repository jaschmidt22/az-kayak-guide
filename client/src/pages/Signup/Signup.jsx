import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { TextField } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";

import { deepOrange } from "@mui/material/colors";
import "./Signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const [errorMessage, setErrorMessage] = useState(""); // Define errorMessage state

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setErrorMessage("An error occurred. Please try again."); // Set error message state
    }
  };

  return (
    <>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Blog Sign Up
        </h1>
      </div>
      <form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={handleFormSubmit}
      >
        <Stack spacing={2}>
          <MenuItem>
            <TextField
              value={formState.username} // Use value instead of defaultValue
              id="outlined-basic"
              fullWidth
              label="Username"
              name="username" // Change name to username
              type="text"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
              onChange={handleChange}
            />
          </MenuItem>
          <MenuItem>
            {" "}
            <TextField
              value={formState.email} // Use value instead of defaultValue
              id="outlined-basic"
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
              onChange={handleChange}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              value={formState.password} // Use value instead of defaultValue
              id="outlined-basic"
              fullWidth
              label="Password"
              name="password"
              placeholder="******"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
              onChange={handleChange}
            />
          </MenuItem>
          {errorMessage && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem style={{ justifyContent: "center" }}>
            <Button
              id="signup-button"
              style={{ backgroundColor: deepOrange[500] }}
              className="pop-on-hover"
              xs={{ width: "100%" }}
              variant="contained"
              type="submit" // Add type="submit" to the Button component
            >
              Submit
            </Button>
          </MenuItem>
        </Stack>
      </form>
    </>
  );
};

export default Signup;

//   return (
//     <main className="flex-row justify-center mb-8">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{" "}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your username"
//                   name="username"
//                   type="text"
//                   value={formState.name}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: "pointer" }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };
