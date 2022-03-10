// stateless functional component

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {

    // use hook
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const history = useHistory();

    // 31. delete blog
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted -'+blog.id);
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog Details - { id }</h2> */}
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleClick }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;