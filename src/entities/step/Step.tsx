import React, {FC, FormEvent, ReactNode} from 'react';
import st from "./Step.module.css"
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton";
import {useForm} from "react-hook-form";
import {InputField} from "../../shared/inputField/inputField";
import {stepType} from "../../App/Redux/formsReducer";

export type stepPropsType = {
    step: stepType,
    onSubmit(data: any): void
}
export const Step: FC<stepPropsType> = (props) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const inputs = props.step.inputs.map((element) => <input key={"input_" + element.name} placeholder={element.placeholder} {...register(element.name, {required: element.required})}/>)

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
            <h2>{props.step.header}</h2>

                {inputs}
                {errors.exampleRequired && <span>This field is required</span>}
                <div>
                    <SubmitButton name={"Next"}/>
                </div>
            </form>
        </>
    )
};