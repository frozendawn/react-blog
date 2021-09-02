import styles from './NewBlog.module.css';
import { useRef } from 'react';
import { useHistory } from 'react-router';

const NewBlog = (props) => {
    const titleRef = useRef();
    const textRef = useRef();
    const imgRef = useRef();

    const history = useHistory();

    const submitFormhandler = async (e) => {
        e.preventDefault();
        console.log(titleRef.current.value)
        console.log(textRef.current.value)
        console.log(imgRef.current.value)
        const response = await fetch('https://blog-project-e9554-default-rtdb.europe-west1.firebasedatabase.app/blogs.json', {
            method: "POST",
            body: JSON.stringify({
                title: titleRef.current.value,
                text: textRef.current.value,
                img: imgRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        history.push('/blogs');

        console.log('data', data)
    }
    return (
        <section className={styles['form-container']}>

            <form onSubmit={submitFormhandler}>
                <h2>Add new blog</h2>
                <div className={styles['title-container']}>
                    <input ref={titleRef} type="text" placeholder="Title"></input>
                </div>

                <div className={styles['text-container']}>
                    <textarea ref={textRef}
                        rows="5" cols="33" placeholder="Blog content">
                    </textarea>
                </div>

                <div className={styles['img-container']}>
                    <input ref={imgRef} type="text" placeholder="Img url"></input>
                </div>

                <button>Submit</button>
            </form>
        </section>


    )
}

export default NewBlog;