import styles from './BlogList.module.css';
import IndividualBlog from "./IndividualBlog"
import { useState,useEffect } from 'react';

const BlogList = (props) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        
        const fetchBlogs = async () => {
            
        const response = await fetch('https://blog-project-e9554-default-rtdb.europe-west1.firebasedatabase.app/blogs.json');
        const data = await response.json();
        const transformedData = [];
        
        for(let key in data) {
            transformedData.push({
                id: key,
                title: data[key].title,
                text: data[key].text,
                img: data[key].img
            })
        }
        setBlogs(transformedData);

        }
        fetchBlogs();
    },[]);

    return (
        <div className={styles.Blogs}>
            {blogs.map(blog => {
                return (
                    <IndividualBlog key={blog.id} id={blog.id} title={blog.title} text={blog.text} img={blog.img}/>
                )
            })}
        </div>
    )
}

export default BlogList;