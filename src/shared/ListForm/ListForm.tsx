import {FC, ReactNode} from "react";
import st from "./ListForm.module.css";
import {SubmitButton} from "../SubmitButton/SubmitButton.tsx";

export interface IListForm {
    children: ReactNode,
    bricks: JSX.Element[],
    onSubmit(): void
}

export const ListForm: FC<IListForm> = (props) => {
    return (
        <>
            <div className={st.listFormContainer}>
                <div className={st.bricksContainer}>
                    {props.bricks}
                </div>
                <div className={st.listForm}>
                    {props.children}
                    <SubmitButton width={"75px"} onClick={props.onSubmit} name={"Add"}/>
                </div>
            </div>
        </>
    )
}