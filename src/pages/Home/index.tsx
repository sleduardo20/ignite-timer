import { HandPalm, Play } from 'phosphor-react';
import zod from 'zod';
import { HomeContainer, StartButton, StopButton } from './styles';
import { NewCycleForm } from './NewCycleForm';
import { CountDown } from './CountDown';
import { useCycleContext } from '../../context/CyclesContext';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inform a tarefa'),
  minutesAmount: zod
    .number()
    .min(1)
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interrupedCycle } = useCycleContext();

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);
    reset();
  };

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <StopButton type="button" onClick={interrupedCycle}>
            <HandPalm size={24} /> Interromper
          </StopButton>
        ) : (
          <StartButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Comerçar
          </StartButton>
        )}
      </form>
    </HomeContainer>
  );
}
