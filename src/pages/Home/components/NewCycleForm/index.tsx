import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";


export function NewCycleForm(){

    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput type="text" id="task" placeholder="Dê um nome para o seu projeto" {...register('task')} disabled={!!activeCycle}/>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60} {...register('minutesAmount', { valueAsNumber: true })} disabled={!!activeCycle} />

            <span>minutos.</span>
        </FormContainer>
        )
}