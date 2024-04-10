
import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOSTS } from '../../utils/queries';
import { Card, CardContent, Typography } from '@mui/material';

const Blog = () => {
    const { loading, error, data } = useQuery(QUERY_BLOGPOSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Blog Posts</h1>
            {data && data.blogposts && data.blogposts.map(blogPost => {
                // Convert Unix timestamp to Date object
                const createdAtDate = new Date(parseInt(blogPost.createdAt));

                return (
                    <Card key={blogPost._id} style={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {blogPost.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {blogPost.blogPostText}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created By: {blogPost.createdBy} | Created At: {createdAtDate.toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}

export default Blog;