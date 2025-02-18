import { FC } from 'react';

interface Props {
  question: string;
  answer: string;
}

export const QAPair: FC<Props> = ({ question, answer }) => (
  <div className="block">
    <div className="question">{question}</div>
    <div className="answer">{answer}</div>
  </div>
);
