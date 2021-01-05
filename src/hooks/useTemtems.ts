import { useCallback, useContext } from 'react';

import { TemtemsContext } from '../contexts/TemtemsContext';
import { Temtem } from '../types';

interface ITemtemsRepo {
  findTentems(): Promise<Temtem[]>;
}

interface IUseTemtemsDTO {
  temtemsRepo: ITemtemsRepo;
}

interface IUseTemtems {
  temtems: Temtem[];
  isLoading: boolean;
  loadTemtems(): Promise<void>;
}

const useTemtems = ({ temtemsRepo }: IUseTemtemsDTO): IUseTemtems => {
  const context = useContext(TemtemsContext);

  if (!context) {
    throw new Error('useTemtems must be used within an TemtemsProvider.');
  }

  const {
    isLoadingState: [isLoading, setLoading],
    temtemsState: [temtems, setTemtems],
  } = context;

  const loadTemtems = useCallback(async () => {
    setLoading(true);
    return temtemsRepo
      .findTentems()
      .then(data => {
        setTemtems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [setLoading, setTemtems, temtemsRepo]);

  return { temtems, isLoading, loadTemtems };
};

export default useTemtems;
