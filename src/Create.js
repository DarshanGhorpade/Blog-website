import { useState } from "react";
import { useHistory } from "react-router-dom";

// stateless functional component
const Create = () => {

    const [title, setTitle] = useState('');
    
    const [body, setBody] = useState('');

    const [author, setAuthor] = useState('Darshan');

    const [isPending, setIsPending] = useState(false);

    // 30. to redirect to home page after adding blog
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        // console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // go to homepage after adding new blog successfully
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                
                <label>Blog title:</label>
                <input
                    type="text"
                    value={ title }
                    onChange = {(e) => setTitle(e.target.value)}
                    required
                />

                <label>Blog body:</label>
                <textarea
                    value={ body }
                    onChange = {(e) => setBody(e.target.value)}
                    required
                ></textarea>

                <label>Author:</label>
                <select
                    value={ author }
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Darshan">Darshan</option>
                    <option value="Dhananjay">Dhananjay</option>
                    <option value="Dashrath">Dashrath</option>
                </select>

                {!isPending && <button>Add blog</button>}

                {isPending && <button disabled>Adding blog...</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
    );
}

export default Create;