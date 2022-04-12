import React, { useState } from 'react';
import { Button } from 'antd';
import getArticleById from '@/apis/article/getArticleById';
import { translateMarkdown } from '@/utils';
import useMount from '@/hooks/useMount';
import useBoolean from '@/hooks/useBoolean';
import styles from './index.module.less';

const Test = () => {
  const [content, setContent] = useState('');
  const { value: visible, setTrue, setFalse } = useBoolean(false);
  useMount(() => {
    getArticleById({ articleId: 49, type: undefined }).then((res) => {
      setContent(translateMarkdown(res.content));
    });
  });
  return (
    <div className={styles.test}>
      <div className={styles.top}>2222</div>
      <Button
        type="primary"
        onClick={() => {
          setTrue();
        }}
      >
        展示
      </Button>
      <Button
        style={{ marginLeft: '30px' }}
        type="primary"
        onClick={() => {
          setFalse();
        }}
      >
        隐藏
      </Button>
      {visible && <div>内容</div>}
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
