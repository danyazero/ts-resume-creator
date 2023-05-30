import {FC} from 'react';
import st from "./SubmitButton.module.css"
import {StartButtonPropsType} from "./SubmitButtonTypes";
export const SubmitButton: FC<StartButtonPropsType> = ({name, onClick}) => {
    return (
        <>
            <button className={st.startButton} onClick={onClick} type={onClick ? "button" : "submit"}>{name}</button>
        </>
    )
};