import React from 'react';
import styles from './styles.module.scss';


const BtnEditBackground = ( props ) => {
  const { setBg } = props;
  const text = 'Background';
  return (
    <button
      className={styles.backgroundBtn}
      onClick={() => setBg(true)}
    >
      {text}
    </button>
  )
};

export default BtnEditBackground;