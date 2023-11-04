// Index.js is the starting point that sets up the React app by rendering the root component (App.js) into the actual DOM, and App.js defines the root React component that represents the core UI of your application.

npm run start // This starts up the broswer preview of your project.

node_modules // directory is included in .gitignore due to the large file size. 
npm install // Will look inside of package.json, which will include the entire node_modules folder. 

Component // This contains the template and logic of a part of your application. This must always return a function, which usually contains JSX. 

JSX // Allows us to create templates and components. In the background,
Babel // transpiles the JSX into 
HTML // and renders it onto the 
DOM 

className // is the JSX's equivalent to HTML's class. Keyword class is reserved in js.

useState // A hook that updates and re-renders the value on the template. 
import  { useState } from 'react';
const [name, setName] = useState('Mario');


//Cycling through an array in JSX using js. When mapping, you must create the key property that contains a unique ID.
blogs = //An array of objects that contains blog data.
{blogs.map((blog) => (
    <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
    </div>
))}


props // A way to pass data from a parent comp to a child comp. It makes components more reusable.
const blogs = //An array of blog objects
const Home = () => {
    return ( 
        <div className="home">
            <BlogsList blogs={blogs} title="ALL BLOGS" />
            <BlogsList blogs={blogs.filter((blog) => blog.author === 'mario')} title="MARIOS BLOGS" />
        </div>  
     );
}
export default Home;

const BlogList = ({blogs, title}) => {
    return ( 
        console.log(blogs, title);
     );
}
export default BlogList;


useEffect //A hook that runs a function every render of the component. Becareful not to change the state inside the useEffect. This will cause an infinite loop.
import  { useEffect } from 'react';

useEffect(() => {
    console.log("Use effect ran");
}, [name]) //The second argument with the array containing name is a dependency. Now the useEffect will run only when the state of name is changed.


JSON SERVER 
//npx json-server --watch data/db.json --port 8000


fetch //This is the format to grab data from an API.
useEffect(() => {
    fetch('url')
        .then(res => {
            return res.json();
        }).then(data => {
            setBlogs(data);
        })
}, []);



{blogs && <BLogList blogs={blogs} handleDelete={handleDelete} />}