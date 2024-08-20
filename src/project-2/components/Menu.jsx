import { Link } from 'react-router-dom';

import Home from '../../assets/icons/linear/Home';
import Bell from '../../assets/icons/linear/Bell';
import Tag from '../../assets/icons/linear/Tag';
import Envelope from '../../assets/icons/linear/Envelope';

import styles from './Menu.module.css';

function Menu() {
  return (
    <menu className={styles.menu}>
      <Link className={styles['menu-item']} to="">
        <Home />
      </Link>
      <Link className={styles['menu-item']} to="">
        <Bell />
      </Link>
      <Link className={styles['menu-item']} to="">
        <Tag />
      </Link>
      <Link className={styles['menu-item']} to="">
        <Envelope />
      </Link>
    </menu>
  );
}

export default Menu;
