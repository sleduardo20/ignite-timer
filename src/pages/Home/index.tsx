import { Play } from 'phosphor-react';
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles';

export function Home() {
  return (
    <HomeContainer>
      <form action="#">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" name="" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} /> Comerçar
        </button>
      </form>
    </HomeContainer>
  );
}
