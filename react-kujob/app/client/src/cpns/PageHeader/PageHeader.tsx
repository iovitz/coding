import React from 'react';
import { Button } from 'antd';
import styles from './test.module.css';

function PageHeader() {
  const openLoginDialog = () => {
    console.log('dakai');
  };

  return (
    <header className={styles['page-header']}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>KUJOB</h1>

        <Button type="primary" onClick={openLoginDialog}>登录 / 注册</Button>
      </div>
    </header>
  );
}

export default PageHeader;
