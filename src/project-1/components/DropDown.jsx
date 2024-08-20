import { useContext } from 'react';

import CustomButton from './CustomButton';
import LineHeight from '../../assets/icons/linear/LineHeight';
import Sun from '../../assets/icons/linear/Sun';
import Moon from '../../assets/icons/linear/Moon';

import { Project1StateContext } from '../../store/Project1StateContext';

import styles from './DropDown.module.css';

function DropDown() {
  const { dropdownActive } = useContext(Project1StateContext);

  return (
    <div className={`${styles.dropdown} ${dropdownActive ? styles.active : ''}`}>
      <div className={styles.content}>
        <CustomButton type="minus" />
        <span>
          <span className={styles['text--small']}>A</span>
          <span className={styles['text--large']}>A</span>
        </span>
        <CustomButton type="plus" />
      </div>
      <div className={styles.content}>
        <CustomButton type="minus" />
        <span>
          <LineHeight />
        </span>
        <CustomButton type="plus" />
      </div>
      <div className={`${styles.content} ${styles.theme}`}>
        <Sun />
        <button className={styles['theme-btn']}>
          <div className={styles['theme-bg']}>
            <div className={styles['theme-circle']}></div>
          </div>
        </button>
        <Moon />
      </div>
    </div>
  );
}

export default DropDown;
