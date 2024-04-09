import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOSTS } from '../../utils/queries';

// const Blog = () => {
//     const { loading, error, data } = useQuery(QUERY_BLOGPOSTS);

//     if (loading) return <p>Loading...</p>;
//     { console.log("Data:", data) }
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div>
//             <h1>Blog Posts</h1>
//             {data.blogPosts.map(blogPost => (
//                 <div key={blogPost._id}>
//                     <h2>{blogPost.blogPostAuthor}</h2>
//                     <p>{blogPost.blogPostText}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

const Blog = () => {
    const { loading, error, data } = useQuery(QUERY_BLOGPOSTS);

    if (loading) return <p>Loading...</p>;
    { console.log("Data:", data) }
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Blog Posts</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.blogposts && data.blogposts.map(blogPost => (
                <div key={blogPost._id}>
                    <h2>{blogPost.blogPostAuthor}</h2>
                    <p>{blogPost.blogPostText}</p>
                </div>
            ))}
        </div>
    );
}
export default Blog;