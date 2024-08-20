import thumb1 from '../../assets/project-1/images/thumbnail/thumb-01.jpg';
import thumb2 from '../../assets/project-1/images/thumbnail/thumb-02.jpg';
import thumb3 from '../../assets/project-1/images/thumbnail/thumb-03.jpg';
import thumb4 from '../../assets/project-1/images/thumbnail/thumb-04.jpg';
import thumb5 from '../../assets/project-1/images/thumbnail/thumb-05.jpg';
import thumb6 from '../../assets/project-1/images/thumbnail/thumb-06.jpg';
import thumb7 from '../../assets/project-1/images/thumbnail/thumb-07.jpg';
import thumb8 from '../../assets/project-1/images/thumbnail/thumb-08.jpg';
import thumb9 from '../../assets/project-1/images/thumbnail/thumb-09.jpg';
import thumb10 from '../../assets/project-1/images/thumbnail/thumb-10.jpg';
import thumb11 from '../../assets/project-1/images/thumbnail/thumb-11.jpg';
import thumb12 from '../../assets/project-1/images/thumbnail/thumb-12.jpg';

import styles from './Container.module.css';

function Container() {
  return (
    <div id={styles.container}>
      <ul className={styles['thumb-list']}>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Belinda Fewings</div>
            <img src={thumb1} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Bianca Maria</div>
            <img src={thumb2} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Bram Bergers</div>
            <img src={thumb3} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Daniel Koponyas</div>
            <img src={thumb4} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Dmitry Korkhau</div>
            <img src={thumb5} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Eugene Ivy</div>
            <img src={thumb6} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>EXPANALOG</div>
            <img src={thumb7} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Karl Bewick</div>
            <img src={thumb8} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Milin John</div>
            <img src={thumb9} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Stacey Knipe</div>
            <img src={thumb10} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>Stacie Z</div>
            <img src={thumb11} />
          </div>
        </li>
        <li>
          <div className={styles.thumb}>
            <div className={styles.title}>sthr ngn</div>
            <img src={thumb12} />
          </div>
        </li>
      </ul>
      <footer></footer>
    </div>
  );
}

export default Container;
