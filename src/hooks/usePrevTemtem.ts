import { useCallback, useContext } from 'react';

import { TemtemsContext } from '../contexts/TemtemsContext';

const usePrevTemtem = (temtemNumber: number) => {
  const context = useContext(TemtemsContext);

  if (!context) {
    throw new Error('useTemtems must be used within an TemtemsProvider.');
  }

  const {
    temtemsState: [temtems],
  } = context;

  const findPrevByNumber = useCallback(() => {
    const idx = temtems.findIndex(tem => tem.number === temtemNumber);

    return temtems[idx - 1] || null;
  }, [temtemNumber, temtems]);

  return findPrevByNumber();
};

export default usePrevTemtem;
