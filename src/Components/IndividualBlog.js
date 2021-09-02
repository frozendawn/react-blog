import styles from './IndividualBlog.module.css';
import { useHistory } from 'react-router';

const IndividualBlog = (props) => {
    const history = useHistory();

    const showDetailsHandler = () => {
        history.push(`/blogs/${props.id}`)
    }


    return (

        <div className={styles.Blog} >

            <div className={styles['img-container']}>
                <img src={props.img} alt={props.title} />
            </div>

            <div className={styles['title-container']}>
                <p>{props.title}</p>
            </div>

            <div className={styles['description-container']}>
                <p>{props.text}</p>
            </div>

            <div className={styles.actions}>
                <button onClick={showDetailsHandler}>Show Details</button>
            </div>
        </div>



    )
}

export default IndividualBlog;