// https://vike.dev/Head

import type { FC } from 'react';
import logoUrl from '../assets/icons/vike.svg';

export const Head: FC = () => {
  return (
    <>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' href={logoUrl} />
      <title>Vike + React + Bun</title>
      <meta name='author' content='Oleksandr Pishta' />
      <meta
        name='description'
        content='Oleksandr Pishta, Full Stack Developer'
      />
      <link rel='canonical' href='http://localhost:3000/' />
    </>
  );
};
