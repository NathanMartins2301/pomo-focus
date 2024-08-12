import { HandPalm, Play } from "phosphor-react";
import * as zod from 'zod';
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { useContext } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number().min(5).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home(){

    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    const { handleSubmit, watch, reset } = newCycleForm

    const task = watch('task')

    const handleCreateNewCycle = (data: NewCycleFormData) => {
        createNewCycle(data);
        reset();
    }


    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />
                {activeCycle ?                 
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm />
                        Interromper
                    </StopCountdownButton> :
                    <StartCountdownButton disabled={!task} type="submit">
                        <Play />
                        Começar
                    </StartCountdownButton>
                }
            </form>
        </HomeContainer>
    )
}