import { useContext, useMemo } from 'react';

import { TemtemsContext } from '../contexts/TemtemsContext';

interface EvolutionElement {
  name: string;
  levels?: number;
  image: string;
  next?: {
    name: string;
    image: string;
  };
}

const useEvolutions = (temtemNumber: number) => {
  const context = useContext(TemtemsContext);

  if (!context) {
    throw new Error('useTemtems must be used within an TemtemsProvider.');
  }

  const {
    temtemsState: [temtems],
  } = context;

  const formattedEvolutions = useMemo<EvolutionElement[] | null>(() => {
    const findTemtemByNumber = (tNumber: number) =>
      temtems.find(tem => tem.number === tNumber);

    const temtem = findTemtemByNumber(temtemNumber);

    if (
      !temtem ||
      !temtem.evolution.evolves ||
      !temtem.evolution.evolutionTree
    ) {
      return null;
    }

    const evolutions = [temtem];
    temtem.evolution.evolutionTree.forEach(evo => {
      const find = findTemtemByNumber(evo.number);
      if (find) {
        evolutions.push(find);
      }
    });

    evolutions.sort((a, b) => a.number - b.number);

    const formatted: EvolutionElement[] = [];

    evolutions.forEach((evo, index) => {
      if (index < evolutions.length - 1) {
        formatted.push({
          name: evo.name,
          image: evo.portraitWikiUrl,
          levels:
            evo.evolution.evolutionTree && evo.evolution.evolutionTree[0]
              ? evo.evolution.evolutionTree[0].levels
              : 0,
          next: {
            name: evolutions[index + 1].name,
            image: evolutions[index + 1].portraitWikiUrl,
          },
        });
      }
    });

    return formatted;
  }, [temtemNumber, temtems]);

  return formattedEvolutions;
};

export default useEvolutions;
