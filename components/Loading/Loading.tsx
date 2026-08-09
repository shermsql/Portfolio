import React from 'react';

import styles from './Loading.module.css';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <div className={`${styles.overlay} ${isLoading ? '' : styles.isHidden}`}>
      <div className={styles.innerWrapper}>

        <div className={styles.spinnerWrapper}>
          <div className={styles.spinner}></div>
          <div className={styles.ringPulse}></div>
        </div>

        <div className={styles.text}>
          Yükleniyor...
        </div>

      </div>
    </div>
  );
};

export default Loading;