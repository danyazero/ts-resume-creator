import st from "./Form.module.css";
import {FC} from "react";
import {useForm} from "react-hook-form";
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";
import {IForm} from "./FormModel.ts";



export const Form: FC<IForm> = (props) => {

    const {register, handleSubmit, resetField, unregister} = useForm();

    const onSubmit = (data: any) => {
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

