import api from '../../../services/tentemApi';
import { Temtem } from '../../../types';
import ITemtemsRepository from '../ITemtemsRepository';

export default class TemtemsRepository implements ITemtemsRepository {
  private api = api;

  async findTentems(): Promise<Temtem[]> {
    const temtems = await this.api.get<Temtem[]>('/temtems');

    return temtems.data;
  }
}
