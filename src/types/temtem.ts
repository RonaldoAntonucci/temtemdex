import { TemtemType } from '.';

export default interface Temtem {
  number: number;
  name: string;
  portraitWikiUrl: string;
  types: TemtemType[];
}
