import React, { useState, useEffect } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthService from '../../client/src/utils/auth.js';
import { REMOVE_BLOGPOST, UPDATE_BLOGPOST } from '../src/utils/mutations.js';
import { Card, CardContent, Typography } from '@mui/material';


import Modal from "@mui/material/Modal"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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


// function Dashboard(props) {

//   const { data, loading } = useQuery(ME_BLOGS)

//   console.log(data)

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen} variant="contained">Add Blog Post</Button>
//       <AddBlogModal open={open} handleClose={handleClose} />


//     </div>


//   );

// }


function Dashboard(props) {
  const { data, loading, refetch } = useQuery(ME_BLOGS);
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClose = () => setIsOpen(false)
  console.log(data)

  const [removeBlogPost] = useMutation(REMOVE_BLOGPOST);
  const [updateBlogPost] = useMutation(UPDATE_BLOGPOST);

  const handleDelete = async (blogPostId) => {
    try {
      await removeBlogPost({
        variables: { blogPostId },
      });
      // Refetch the blog posts after deletion
      refetch();
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  const handleUpdate = async (blogPostId) => {
    try {
      const updatedText = prompt('Enter updated text:');
      if (updatedText) {
        await updateBlogPost({
          variables: {
            blogPostId,
            updatedText,
            updatedAt: new Date().toISOString(), // Update the updatedAt field
          },
        });
        // Refetch the blog posts after update
        refetch();
      }
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Button onClick={e => setIsOpen(true)}>Add Blog Post</Button>
      <AddBlogModal open={isOpen} handleClose={handleClose} />
      {loading ? <p>Loading...</p> : (
        <div>
          {data && data.meBlogs && data.meBlogs.map(blogPost => (
            <Card key={blogPost._id} style={{ marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {blogPost.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {blogPost.blogPostText}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created At: {new Date(parseInt(blogPost.createdAt)).toLocaleString()}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleUpdate(blogPost._id)}>Update</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(blogPost._id)}>Delete</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}



function AddBlogModal({ open, handleClose }) {
  const [addBlogPost] = useMutation(ADD_BLOGPOST);
  const [blogpostText, setBlogPostTest] = React.useState('')
  const [title, setTitle] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault();
    addBlogPost({
      variables: {
        blogpostText,
        title
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
          <TextInput value={title} onChange={e => setTitle(e.target.value)} />
          <TextInput value={blogpostText} onChange={e => setBlogPostTest(e.target.value)} />
          <Button variant="contained" type="submit">Submit</Button>
        </form>
      </Box>
    </Modal>)


}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
