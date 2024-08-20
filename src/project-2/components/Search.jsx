import MagnifyingGlass from '../../assets/icons/linear/MagnifyingGlass';

import styles from './Search.module.css';

function Search() {
  return (
    <form className={styles.search}>
      <button type="button" className={styles['search-btn']}>
        <MagnifyingGlass />
      </button>
      <input type="text" className={styles['search-input']} placeholder="search" />
    </form>
  );
}

export default Search;
