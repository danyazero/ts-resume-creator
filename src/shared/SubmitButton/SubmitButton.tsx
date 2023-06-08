import {FC} from 'react';
import st from "./SubmitButton.module.css"
import {StartButtonPropsType} from "./SubmitButtonTypes";
export const SubmitButton: FC<StartButtonPropsType> = ({name, onClick, width}) => {
    return (
        <>
            <button className={st.startButton} style={{width: width ? width : "340px" }} onClick={onClick} type={onClick ? "button" : "submit"}>{name}</button>
        </>
    )
};