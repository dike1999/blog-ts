import React, { useEffect, useState } from 'react';
import getArticleById from '@/apis/article/getArticleById';
import { translateMarkdown } from '@/utils';
import styles from './index.module.css';

const Test = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    getArticleById({ articleId: 49, type: undefined }).then((res) => {
      setContent(translateMarkdown(res.content));
    });
  }, []);
  return (
    <div className={styles.test}>
      <div className={styles.top}>2222</div>
      <div
        className={styles.bottom}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
};

export default Test;
