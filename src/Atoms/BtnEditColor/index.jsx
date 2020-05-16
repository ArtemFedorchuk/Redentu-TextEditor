import React from 'react';
import styles from './styles.module.scss';

const BtnEditColor = ( props ) => {
  const { setColor } = props;
  const text = 'Color Text';
  return (
    <button
      className={styles.colorBtn}
      onClick={() => setColor(true)}
    >
      {text}
    </button>
  )
};

export default BtnEditColor;