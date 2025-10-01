/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, type ReactNode } from "react";

export type RankingItem = {
    mile_value: number;
    description: string;
    position: number;
}
type OffersData = {
  programa?: string;
  cpf?: string;
  produto?: string;
  valorMilheiro?: string;
  ranking?: RankingItem[];
  login?: string;
  senha?: string;
  celular?: string;
};

type OfferContextType = {
  data: OffersData;
  updateData: (values: Partial<OffersData>) => void;
  resetData: () => void;
};

const OffersContext = createContext<OfferContextType | undefined>(undefined);

export function OffersProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OffersData>({});

  const updateData = (values: Partial<OffersData>) => {
    setData(prev => ({ ...prev, ...values }));
  };

  const resetData = () => setData({});

  return (
    <OffersContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </OffersContext.Provider>
  );
}

export function useOffers() {
  const context = useContext(OffersContext);
  if (!context) throw new Error("useOffers deve ser usado dentro do OffersProvider");
  return context;
}
