import {FC, ReactNode, useState} from "react";
import st from "./Dropdown.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../App/Redux/store.ts";

export interface IDropdownProps {
    header: string,
    index: number,
    children: ReactNode
}

export const Dropdown: FC<IDropdownProps> = (props) => {
    const position = useSelector((state: RootState) => state.forms.position)

    return (
        <>
            <div className={st.dropdown}>
                {props.header}
                <input readOnly={true} type={"checkbox"} checked={props.index < position} className={st.checkbox}/>
            </div>

                {props.index == position && <div className={st.items}>{props.children}</div>}

        </>
    )
}