import React from 'react';
import styles from './styles.module.scss';

const BtnEditFontSize = () => {
  const text = 'Font Size';
  return (
    <button
      className={styles.fontSizeBtn}
    >
      {text}
    </button>
  )
};

export default BtnEditFontSize;