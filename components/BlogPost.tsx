import md from 'markdown-it';


const BlogPost = (blogPost: any) => {
    return (
        <div>
            <div className="prose text-white max-w-7xl" dangerouslySetInnerHTML={{ __html: md().render(blogPost.blogPost) }}></div>
        </div>
    );
}

export default BlogPost;