import React, { useEffect } from 'react';
import getArticleById from '@/apis/article/getArticleById';
import styles from './index.module.css';

const Test = () => {
  useEffect(() => {
    getArticleById({ articleId: 49, type: undefined }).then((res) => {
      console.log(res.createdAt);
    });
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles.top}>2222</div>
      <div className={styles.bottom}>3333</div>
    </div>
  );
};

export default Test;
