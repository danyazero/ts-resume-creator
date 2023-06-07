import {FC, ReactNode, useState} from "react";
import st from "./Dropdown.module.css"

export interface IDropdownProps {
    header: string,
    isOpen: boolean,
    isDone: boolean,
    children: ReactNode
}

export const Dropdown: FC<IDropdownProps> = (props) => {
    debugger
    const [open, setOpen] = useState<boolean>(props.isOpen)

    return (
        <>
            <div className={st.dropdown}>
                {props.header}
                <input readOnly={true} type={"checkbox"} checked={props.isDone} className={st.checkbox}/>
            </div>

                {props.isOpen && <div className={st.items}>{props.children}</div>}

        </>
    )
}