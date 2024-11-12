import { Global } from '@emotion/react';
import { type FC, useState } from 'react';
// import picture from '../../assets/icons/vite.svg?w=100;300;500&as=picture';
import { Button } from '../../components/Button/Button.jsx';
import { Icon } from '../../components/Icon/Icon.jsx';
import { Link } from '../../components/Link/Link.jsx';
// import { Picture } from '../../components/Picture/Picture.jsx';
import { CardStyled, GlobalStyles, TextStyled, TitleStyled } from './Styled.js';

export const Page: FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    setCount(prev => prev + 1);
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <div>
        <Link href='https://vike.dev/'>
          <Icon name='vike' primary={true} />
        </Link>
        <Link href='https://react.dev'>
          <Icon name='react' animated={true} />
        </Link>
        <Link href='https://typescriptlang.org/'>
          <Icon name='ts' />
        </Link>
      </div>
      <TitleStyled>Vike + React + TS</TitleStyled>
      <CardStyled>
        <Button label={`count is ${count}`} onClick={handleClick} />
      </CardStyled>
      <TextStyled>Click on logos to learn more</TextStyled>
      {/* <Picture picture={picture} /> */}
    </>
  );
};
