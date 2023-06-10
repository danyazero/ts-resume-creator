import {FC} from 'react';
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton";
import {IStepProps} from "./StepModel.ts";

export const Step: FC<IStepProps> = (props) => {
    return (
        <>
            {/*<h2>{props.header}</h2>*/}

            {props.children}

            {props.onClick && <SubmitButton name={"Save"} onClick={props.onClick}/>}
        </>
    )
};