import {ChangeEvent, FC, useState} from 'react';
import st from './TechnologyForm.module.css'
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";

export type AddLinksPropsType = {
    stack: string[]
    getData?(data: string[]): void
}

export const TechnologyForm: FC<AddLinksPropsType> = (props) => {
    const [technology, setTechnology] = useState("")

    const onSubmit = () => {
        props.stack.push(technology)
        if(props.getData && technology.length > 0) props.getData(props.stack);
        setTechnology("")
    }

    const inputs = props.stack.map((element, index) => <div className={st.technology} key={"object_" + index}>{element}</div>)


    return (
        <div className={st.addTechnologyContainer}>
            <div className={st.bricksContainer}>{inputs}</div>
            <div className={st.addTechnology}>
                <input placeholder={"Enter technology"} name={"technology"} value={technology} onChange={(event:  ChangeEvent<HTMLInputElement>) => setTechnology(event.target.value)}/>
                <SubmitButton width={"75px"} onClick={onSubmit} name={"Add"}/>
            </div>
        </div>
    )
};