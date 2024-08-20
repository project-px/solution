import Search from './Search';
import MenuDots from '../../assets/icons/linear/MenuDots';

import styles from './Header.module.css';

function Header({ difficult }) {
  return (
    <header id={styles.header}>
      <Search />
      <>
        {difficult && <button></button>}
        <button className={styles['menu-btn']}>
          <MenuDots />
        </button>
      </>
    </header>
  );
}

export default Header;
