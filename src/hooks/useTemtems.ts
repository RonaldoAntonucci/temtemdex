import { useEffect, useState } from 'react';

import { TemtemsRepository } from '../repositories/tentemsRepository';
import { Temtem } from '../types';

const temtemsRepo = new TemtemsRepository();

interface IUseTemtems {
  temtems: Temtem[];
}

const useTemtems = (): IUseTemtems => {
  const [temtems, setTemtems] = useState<Temtem[]>([]);

  useEffect(() => {
    temtemsRepo.findTentems().then(data => setTemtems(data));
  }, []);

  return { temtems };
};

export default useTemtems;
