import { useContext } from 'react';

import { TemtemsContext } from '../contexts/TemtemsContext';

const useNextTemtem = (temtemNumber: number) => {
  const context = useContext(TemtemsContext);

  if (!context) {
    throw new Error('useTemtems must be used within an TemtemsProvider.');
  }

  const {
    temtemsState: [temtems],
  } = context;

  return (
    temtems[temtems.findIndex(tem => tem.number === temtemNumber) + 1] || null
  );
};

export default useNextTemtem;
