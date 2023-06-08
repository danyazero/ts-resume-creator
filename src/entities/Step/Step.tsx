import React, {FC, ReactNode} from 'react';
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton";
import {HashLink} from "react-router-hash-link";

export type stepPropsType = {
    header: string
    children?: ReactNode
    onClick?(): void
}
export const Step: FC<stepPropsType> = (props) => {
    return (
        <>
            {/*<h2>{props.header}</h2>*/}

            {props.children}

            {props.onClick && <SubmitButton name={"Save"} onClick={props.onClick}/>}
        </>
    )
};