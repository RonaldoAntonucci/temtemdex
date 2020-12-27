import { useEffect, useState } from 'react';

import { TemtemsRepository } from '../repositories/tentemsRepository';
import { Temtem } from '../types';

const temtemsRepo = new TemtemsRepository();

interface IUseTemtems {
  temtems: Temtem[];
  isLoading: boolean;
}

const useTemtems = (): IUseTemtems => {
  const [temtems, setTemtems] = useState<Temtem[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    temtemsRepo
      .findTentems()
      .then(data => {
        setTemtems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { temtems, isLoading };
};

export default useTemtems;
