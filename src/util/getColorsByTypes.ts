import { TEMTEM_TYPES_COLORS } from '../constants';
import { TemtemType } from '../types';

export default (types: TemtemType[]): string[] =>
  types.map(type => TEMTEM_TYPES_COLORS[type || 'Neutral']);
