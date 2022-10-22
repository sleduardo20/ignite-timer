import { useFormContext } from 'react-hook-form';
import { useCycleContext } from '../../../context/CyclesContext';
import { FormContainer, MinutesAmountInput, TaskInput } from './styles';

export function NewCycleForm() {
  const { activeCycle } = useCycleContext();

  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto01" />
        <option value="Projeto02" />
        <option value="Projeto03" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
        step={1}
        min={1}
        max={60}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
