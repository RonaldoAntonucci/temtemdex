import { TemtemType } from '.';

export default interface Temtem {
  number: number;
  name: string;
  portraitWikiUrl: string;
  types: TemtemType[];
  gameDescription: string;

  details: {
    height: {
      cm: number;
      inches: number;
    };

    weight: {
      kg: number;
      lbs: number;
    };
  };
}
