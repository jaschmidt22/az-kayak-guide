import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import { TextField } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

import Auth from "../../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Blog Log In
        </h1>
      </div>
      <form
        style={{ display: "flex", justifyContent: "center" }}
        onSubmit={handleFormSubmit}
      >
        <Stack spacing={2}>
          <MenuItem>
            {" "}
            <TextField
              value={formState.email}
              id="outlined-basic"
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
              value={formState.password}
              id="outlined-basic"
              label="Password"
              name="password"
              placeholder="******"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
              onChange={handleChange}
            />
          </MenuItem>
          {error && (
            <div>
              <p className="error-text">{error.message}</p>
            </div>
          )}

          <MenuItem style={{ justifyContent: "center" }}>
            <Button
              id="login-button"
              style={{ backgroundColor: deepOrange[500] }}
              className="pop-on-hover"
              xs={{ width: "100%" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </MenuItem>
        </Stack>
      </form>
    </>
  );
};

export default Login;
