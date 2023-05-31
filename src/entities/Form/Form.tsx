import st from "./Form.module.css";
import {FC, ReactNode} from "react";
import {useForm} from "react-hook-form";
import {stepType} from "../../App/Redux/formsReducer.ts";
import {Step} from "../Step/Step.tsx";
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";

export type formType = {
    children?: ReactNode,
    step: stepType,
    next?(): void,
    prev(): void,
    getData?(data: any): void
}

export const Form: FC<formType> = (props) => {

    const {register, handleSubmit, resetField, unregister} = useForm();

    debugger
    const onSubmit = (data: any) => {
        props.getData && props.getData(data)

        for (let i = 0; i < props.step.inputs.length; i++){
            resetField(props.step.inputs[i].name)
            unregister(props.step.inputs[i].name)
        }

    }
    const inputs = props.step.inputs.map((element) =>
        <input key={"input_" + element.name} type={element.type} placeholder={element.placeholder} {...register(element.name, {required: element.required})}/>
    )

    return(
        <form className={st.addProject} onSubmit={handleSubmit(onSubmit)}>
            <Step next={props.next && props.next} header={props.step.header} previous={props.prev}>

                {inputs}
                {props.children}

                {props.next && <SubmitButton name={"Add"}/>}
            </Step>
        </form>
    )
}

