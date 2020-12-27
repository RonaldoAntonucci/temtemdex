import { useCallback, useState } from 'react';

import { TemtemsRepository } from '../repositories/tentemsRepository';
import { Temtem } from '../types';

const temtemsRepo = new TemtemsRepository();

interface IUseTemtems {
  temtems: Temtem[];
  isLoading: boolean;
  loadTemtems(): Promise<void>;
}

const useTemtems = (): IUseTemtems => {
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
  }, []);

  return { temtems, isLoading, loadTemtems };
};

export default useTemtems;
