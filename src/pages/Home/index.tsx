import { Play } from 'phosphor-react';
import {
  StartButton,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  MinutesAmountInput,
  TaskInput,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="Projeto01" />
            <option value="Projeto02" />
            <option value="Projeto03" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            name=""
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartButton type="submit" disabled>
          <Play size={24} /> Comerçar
        </StartButton>
      </form>
    </HomeContainer>
  );
}
