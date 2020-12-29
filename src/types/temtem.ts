import { TemtemType } from '.';

export default interface Temtem {
  number: number;
  name: string;
  portraitWikiUrl: string;
  types: TemtemType[];
  gameDescription: string;
  genderRatio: {
    male: number;
    female: number;
  };
  catchRate: number;
  hatchMins: number;

  traits: string[];

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

  tvYields: {
    hp: number;
    sta: number;
    spd: number;
    atk: number;
    def: number;
    spatk: number;
    spdef: number;
  };
}
