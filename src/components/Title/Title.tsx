import React from 'react';
import style from './Title.module.css';

export type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <h1 className={style.title}>{children}</h1>;
}

export default Title;
