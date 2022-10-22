import { createContext, useContext, useState } from 'react';

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface CycleContextData {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  cycles: Cycle[];
  amountSecondsPassed: number;
  interrupedCycle: () => void;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: NewCycleFormData) => void;
}

const CycleContext = createContext({} as CycleContextData);

interface ProviderProps {
  children: React.ReactNode;
}
export const CycleProvider = ({ children }: ProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find(({ id }) => id === activeCycleId);

  const markCurrentCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );
  };

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  const createNewCycle = (data: NewCycleFormData) => {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
  };

  const interrupedCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      }),
    );

    setActiveCycleId(null);
  };

  return (
    <CycleContext.Provider
      value={{
        amountSecondsPassed,
        activeCycle,
        activeCycleId,
        cycles,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interrupedCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  );
};

export const useCycleContext = () => useContext(CycleContext);
