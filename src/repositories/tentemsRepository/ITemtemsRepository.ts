import { Temtem } from '../../types';

export default interface ITemtemsRepository {
  findTentems(): Promise<Temtem[]>;
}
