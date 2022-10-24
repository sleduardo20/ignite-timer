import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  addNewCycleAction,
  interrupedCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions';
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer';

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
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStaeJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      );

      if (storedStaeJSON) {
        return JSON.parse(storedStaeJSON);
      }
    },
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { activeCycleId, cycles } = cyclesState;

  const activeCycle = cycles.find(({ id }) => id === activeCycleId);

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON);
  }, [cyclesState]);

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction());
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

    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  };

  const interrupedCycle = () => {
    dispatch(interrupedCurrentCycleAction());
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
