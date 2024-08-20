import Minus from '../../assets/icons/linear/Minus';
import Plus from '../../assets/icons/linear/Plus';

import styles from './CustomButton.module.css';

function CustomButton({ type }) {
  let svg;

  if (type === 'plus') svg = <Plus />;
  if (type === 'minus') svg = <Minus />;

  return <button className={styles.btn}>{svg}</button>;
}

export default CustomButton;
