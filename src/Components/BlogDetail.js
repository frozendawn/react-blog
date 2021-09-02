import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './BlogDetail.module.css';


const BlogDetail = (props) => {

    const params = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`https://blog-project-e9554-default-rtdb.europe-west1.firebasedatabase.app/blogs/${params.id}.json`);
            const data = await response.json()
            setBlog(data);
        }
        fetchBlog();
    })



    return (
        <div className={styles.container}>
            <div className={styles['image-container']}>
                <img src={blog.img} alt={blog.title}></img>
            </div>

            <div className={styles['title-container']}>
                <h1>{blog.title}</h1>
            </div>

            <div className={styles['text-container']}>
                <p>{blog.text}</p>
            </div>


        </div>



    )
}

export default BlogDetail;