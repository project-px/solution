import { Link } from 'react-router-dom';

import styles from './Avatar.module.css';

function Avatar({ img, small }) {
  return (
    <Link className={`${styles.avatar} ${small ? styles.small : ''}`} to="">
      <img src={img} alt="Avatar" />
    </Link>
  );
}

export default Avatar;
