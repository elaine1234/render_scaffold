import React, { useMemo } from 'react';
import { add } from 'render-scaffold';

export default ({ title }: { title: string }) => {
  const result = useMemo(() => add(1, 2), []);
  return (
    <>
      <h1>{title}</h1>
      <p>{result}</p>
    </>
  );
};
