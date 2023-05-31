import React, {FC, FormEvent, ReactNode} from 'react';
import st from "./Step.module.css"
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton";

export type stepPropsType = {
    header: string
    children?: ReactNode
    previous(): void
    next?(): void
}
export const Step: FC<stepPropsType> = (props) => {
    return (
        <>
            <h2>{props.header}</h2>

            {props.children}

            <div className={st.navigationContainer}>
                <SubmitButton name={"Prev"} onClick={props.previous}/>
                <SubmitButton onClick={props.next} name={"Next"}/>
            </div>
        </>
    )
};