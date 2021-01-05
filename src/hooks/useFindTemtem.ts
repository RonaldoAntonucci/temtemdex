import { useCallback, useContext } from 'react';

import { TemtemsContext } from '../contexts/TemtemsContext';

const useFindTemtem = () => {
  const context = useContext(TemtemsContext);

  if (!context) {
    throw new Error('useTemtems must be used within an TemtemsProvider.');
  }

  const {
    temtemsState: [temtems],
  } = context;

  const findTemtemByNumber = useCallback(
    (temtemNumber: number) =>
      temtems.filter(tem => tem.number === temtemNumber),
    [temtems],
  );

  return findTemtemByNumber;
};

export default useFindTemtem;
