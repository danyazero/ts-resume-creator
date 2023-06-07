import {FC} from 'react';
import st from "./SubmitButton.module.css"
import {StartButtonPropsType} from "./SubmitButtonTypes";
export const SubmitButton: FC<StartButtonPropsType> = ({name, onClick}) => {
    return (
        <>
            <button className={st.startButton} style={{width: onClick ? "70px" : "278px" }} onClick={onClick} type={onClick ? "button" : "submit"}>{name}</button>
        </>
    )
};