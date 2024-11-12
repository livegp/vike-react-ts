import type { FC } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

export const Page: FC = () => {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <>
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    );
  }
  return (
    <>
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </>
  );
};
