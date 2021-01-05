import { useCallback, useState } from 'react';

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
  const [temtems, setTemtems] = useState<Temtem[]>([]);
  const [isLoading, setLoading] = useState(false);

  const loadTemtems = useCallback(async () => {
    setLoading(true);
    return temtemsRepo
      .findTentems()
      .then(data => {
        setTemtems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [temtemsRepo]);

  return { temtems, isLoading, loadTemtems };
};

export default useTemtems;
