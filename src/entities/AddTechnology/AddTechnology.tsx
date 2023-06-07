import {ChangeEvent, FC, useState} from 'react';
import st from './AddTechnology.module.css'
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";

export type AddLinksPropsType = {
    stack: string[]
    getData?(data: string[]): void
}

export const AddTechnology: FC<AddLinksPropsType> = (props) => {
    const [technology, setTechnology] = useState("")

    const onSubmit = () => {
        props.stack.push(technology)
        if(props.getData && technology.length > 0) props.getData(props.stack);
        setTechnology("")
    }

    const inputs = props.stack.map((element, index) => <div className={st.technology} key={"object_" + index}>{element}</div>)


    return (
        <>
            {inputs}
            <div className={st.addTechnology}>
                <input placeholder={"Enter technology"} name={"technology"} value={technology} onChange={(event:  ChangeEvent<HTMLInputElement>) => setTechnology(event.target.value)}/>
                <SubmitButton onClick={onSubmit} name={"Add"}/>
            </div>
        </>
    )
};