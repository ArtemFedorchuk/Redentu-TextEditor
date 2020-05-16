import React from 'react';
import styles from './styles.module.scss';

const BtnEditFontSize = ( props ) => {
  const { setFz } = props;
  const text = 'Font Size';
  return (
    <button
      className={styles.fontSizeBtn}
      onClick={() => setFz(true)}
    >
      {text}
    </button>
  )
};

export default BtnEditFontSize;