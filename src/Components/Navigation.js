import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {

    return (
        <nav>
            <span className={styles.logo}>React Blog</span>
            <ul>
                <li><NavLink activeClassName={styles.active} to="/blogs">All Blogs</NavLink></li>
                <li><NavLink activeClassName={styles.active} to="/new-blog">New Blog</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navigation;