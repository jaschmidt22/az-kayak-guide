import React from "react"
import { useQuery, gql, useMutation } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Modal from "@mui/material/Modal"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import TextInput from "@mui/material/TextField"

import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About/About.jsx";
import Lakes from "./pages/Lakes/Lakes.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Blog from "./pages/Blog/Blog.jsx";

const ME_BLOGS = gql`
query MeBlogs{
 meBlogs {
  blogPostText
  blogPostAuthor
  createdAt
 }
}
`


import "./index.css";
import { ADD_BLOGPOST } from "./utils/mutations.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/Lakes",
        element: <Lakes />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Blog",
        element: <Blog />
      },
      {
        path: "/Dashboard",
        element: <Dashboard />
      },
    ],
  },
]);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Dashboard(props) {

  const { data, loading } = useQuery(ME_BLOGS)

  console.log(data)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">Add Blog Post</Button>
      <AddBlogModal open={open} handleClose={handleClose} />

    </div>
  );

}


function AddBlogModal({ open, handleClose }) {
  const [addBlogPost] = useMutation(ADD_BLOGPOST);
  const [blogpostText, setBlogPostTest] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault();
    addBlogPost({
      variables: {
        blogpostText
      }
    })
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <TextInput value={blogpostText} onChange={e => setBlogPostTest(e.target.value)} />
          <Button variant="contained" type="submit">Submit</Button>
        </form>
      </Box>
    </Modal>)


}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
