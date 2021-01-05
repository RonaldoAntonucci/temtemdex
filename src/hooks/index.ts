import { TemtemsRepository } from '../repositories/tentemsRepository';

import useTemtemsHook from './useTemtems';

export { default as useFindTemtem } from './useFindTemtem';
export { default as useEvolutions } from './useEvolutions';

const temtemsRepo = new TemtemsRepository();

export const useTemtems = () => useTemtemsHook({ temtemsRepo });
