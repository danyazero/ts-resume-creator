import {FC, useRef} from "react";
import st from "./Dropdown.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../App/Redux/store.ts";
import {IDropdownProps} from "./DropdownModel.ts";
import { CSSTransition } from 'react-transition-group';

export const Dropdown: FC<IDropdownProps> = (props) => {
    const position = useSelector((state: RootState) => state.forms.position)
    const nodeRef = useRef(null)


    return (
        <>
            <div className={st.dropdown}>
                {props.header}
                <input readOnly={true} type={"checkbox"} checked={props.index < position} className={st.checkbox}/>
            </div>
            <CSSTransition
                in={props.index == position}
                key={props.index}
                nodeRef={nodeRef}
                timeout={300}
                unmountOnExit
                classNames={"alert"}
            >
                <div ref={nodeRef} className={st.items}>{props.children}</div>
            </CSSTransition>

        </>
    )
}