import {FC} from 'react';
import st from "./SubmitButton.module.css"
import {IStartButtonProps} from "./SubmitButtonModel.ts";
export const SubmitButton: FC<IStartButtonProps> = ({name, onClick, width}) => {
    return (
        <>
            <button className={st.startButton} style={{width: width ? width : "340px" }} onClick={onClick} type={onClick ? "button" : "submit"}>{name}</button>
        </>
    )
};