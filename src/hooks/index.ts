import { TemtemsRepository } from '../repositories/tentemsRepository';

import useTemtemsHook from './useTemtems';

const temtemsRepo = new TemtemsRepository();

export const useTemtems = () => useTemtemsHook({ temtemsRepo });
