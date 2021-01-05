import React, { createContext, useState } from 'react';

import { Temtem } from '../types';

type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

interface TemtemsContextData {
  temtemsState: [Temtem[], ReactSetState<Temtem[]>];
  isLoadingState: [boolean, ReactSetState<boolean>];
}

export const TemtemsContext = createContext<TemtemsContextData>(
  {} as TemtemsContextData,
);

export const TemstemsContextProvider: React.FC = ({ children }) => {
  const temtemsState = useState<Temtem[]>([]);
  const isLoadingState = useState(false);

  return (
    <TemtemsContext.Provider value={{ temtemsState, isLoadingState }}>
      {children}
    </TemtemsContext.Provider>
  );
};
