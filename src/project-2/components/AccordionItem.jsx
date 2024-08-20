import { useState } from 'react';

import ChevronDown from '../../assets/icons/linear/ChevronDown';

import styles from './AccordionItem.module.css';

function AccordionItem({ accordion }) {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive(prevState => !prevState);
  }

  return (
    <li className={`${styles['accordion-item']} ${isActive ? styles.active : ''}`}>
      <div className={styles['accordion-title']} onClick={handleActive}>
        <span>{accordion.title}</span>
        <ChevronDown />
      </div>
      {isActive && <div className={styles['accordion-content']}>{accordion.content}</div>}
    </li>
  );
}

export default AccordionItem;
