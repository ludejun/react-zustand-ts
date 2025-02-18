import { LineSpace } from '@/components';
import './style.less';

const values = [
  {
    title: '激情 Passionate',
    description: '爱与激情、利他、自强。'
  },
  {
    title: '理性 Rational',
    description: '正直、冷静、长期。'
  },
  {
    title: '谦卑 Humble',
    description: '恭敬谦虛、厚重守拙、感恩自省。'
  }
];

export const Slogan3 = () => (
  <div>
    <p className="title">Slogan3</p>
    <LineSpace height={30} background="unset" />
    <div className="block">
      {values.map((item, index) => (
        <div className="value-item" key={index}>
          <p className="name">{item.title}</p>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);
