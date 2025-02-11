import React from 'react';
import { QAPair } from './qa-pair';

const qaPairs = [
  {
    question: '今天我幽默了吗？',
    answer: '如没有，请反问，我是不是一个无趣的人？'
  },
  {
    question: '今天我分享了吗？',
    answer: '如没有，请反问，我是不是一个自私的人？'
  },
  {
    question: '今天我付出最后1%的努力了吗？',
    answer: '如没有，请反问，我是不是一个平庸的人？'
  }
];

export const Slogan2 = () => (
  <div className="self-examination">
    <div className="title">Slogan2</div>
    {qaPairs.map(pair => (
      <QAPair key={pair.question} {...pair} />
    ))}
  </div>
);
