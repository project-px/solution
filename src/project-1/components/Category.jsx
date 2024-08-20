import CategoryItem from './CategoryItem';

import styles from './Category.module.css';

function Category() {
  return (
    <ul className={styles.list}>
      <CategoryItem title="list" />
      <CategoryItem title="gallery" />
      <CategoryItem title="webzine" />
      <CategoryItem title="post" />
      <CategoryItem title="timeline" />
      <CategoryItem title="playlist" />
    </ul>
  );
}

export default Category;
