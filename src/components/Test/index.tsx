import React, { useEffect } from 'react';
import getArticleById from '../../apis/article/getArticleById';

const Test = () => {
  useEffect(() => {
    getArticleById({ articleId: 49, type: undefined }).then((res) => {
      console.log(res.createdAt);
    });
  }, []);
  return (
    <div>
      <div>1111</div>
    </div>
  );
};

export default Test;
