import BlogPost from "../components/BlogPost";
import corridor from './blog/Corridor.md';
import fs from 'fs';

const Blog = () => {

    const numPosts = fs.readdirSync('./blog');

    return(
        <>
            <div>{numPosts}</div>
            <BlogPost blogPost={corridor} />
        </>
    );
}

export default Blog;