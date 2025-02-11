import React, { FC, useState, useEffect } from 'react';
// import { randomIntRange } from '@/utils/utils';
interface Props {
  children: React.ReactElement[];
}

export const RandomShow: FC<Props> = ({ children }) => {
  const { length } = children;

  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * length));
  }, []);
  return (
    <>{children?.find((_, index) => index === seed % length) ?? children[0]}</>
  );
};
