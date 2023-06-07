import st from "./Form.module.css";
import {FC, ReactNode} from "react";
import {useForm} from "react-hook-form";
import {stepType} from "../../App/Redux/formsReducer.ts";
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";

export type formType = {
    children?: ReactNode,
    step: stepType,
    button?: string,
    reset: boolean,
    getData?(data: any): void
}

export const Form: FC<formType> = (props) => {

    const {register, handleSubmit, resetField, unregister} = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
        props.getData && props.getData(data)

        props.reset && props.step.inputs.forEach((element) => resetField(element.name))
        props.step.inputs.forEach((element) => unregister(element.name))


    }
    const inputs = props.step.inputs.map((element) =>
        <input key={"input_" + element.name} accept={element.accept && element.accept} type={element.type}
               placeholder={element.placeholder} {...register(element.name, {required: element.required})}/>
    )

    return (
        <form className={st.form} onSubmit={handleSubmit(onSubmit)}>

            {inputs}
            {props.children}

            <SubmitButton name={props.button ? props.button : "Add"}/>
        </form>
    )
}

