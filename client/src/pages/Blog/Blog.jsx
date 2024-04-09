import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOSTS } from '../../utils/queries';

const Blog = () => {
    const { loading, error, data } = useQuery(QUERY_BLOGPOSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Blog Posts</h1>
            {data.blogPosts.map(blogPost => (
                <div key={blogPost._id}>
                    <h2>{blogPost.postAuthor}</h2>
                    <p>{blogPost.postText}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;