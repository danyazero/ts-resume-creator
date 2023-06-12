import {FC, ReactNode} from "react";
import st from "./ListForm.module.css";
import {SubmitButton} from "../SubmitButton/SubmitButton.tsx";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export interface IListForm {
    children: ReactNode,
    bricks: JSX.Element[],

    onSubmit(): void
}


export const ListForm: FC<IListForm> = (props) => {
    const bricks = props.bricks.map((element, index) => <CSSTransition
        key={"brick_anim_" + index}
        timeout={150}
        classNames="item">{element}</CSSTransition>)
    return (
        <>
            <div className={st.listFormContainer}>
                <TransitionGroup className={st.bricksContainer}>
                    {bricks}
                </TransitionGroup>
                <div className={st.listForm}>
                    {props.children}
                    <SubmitButton width={"75px"} onClick={props.onSubmit} name={"Add"}/>
                </div>
            </div>
        </>
    )
}