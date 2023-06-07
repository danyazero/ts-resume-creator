import {ChangeEvent, FC, useState} from 'react';
import st from './AddLanguage.module.css'
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";

export enum levels {
    ELEMENTARY = "Elementary",
    PREINTERMEDIATE = "Pre intermediate",
    INTERMEDIATE = "Intermediate",
    UPPERMEDIATE = "Upper intermediate",
    ADVANCED ="Advanced",
    PROFICIENT = "Proficient",
    NATIVE = "Native"
}

export type AddLanguagePropsType = {
    languages: {lang: string, level: string}[]
    getData?(data: {lang: string, level: string}[]): void
}

export const AddLanguage: FC<AddLanguagePropsType> = (props) => {
    const [lang, setLang] = useState("")
    const [level, setLevel] = useState<string>("")

    const onSubmit = () => {
        props.languages.push({lang, level})
        if(props.getData && lang.length > 0) props.getData(props.languages);
        setLang("")
        setLevel("")
    }

    const inputs = props.languages.map((element, index) => <div className={st.technology} key={"object_" + index}>{element.lang + " - " + element.level}</div>)


    return (
        <>
            {inputs}
            <div className={st.addTechnology}>
                <input placeholder={"Enter language"} name={"language"} value={lang} onChange={(event:  ChangeEvent<HTMLInputElement>) => setLang(event.target.value)}/>
                <input placeholder={"Enter your level"} type={"text"} list={"lang_level"} onChange={(event:  ChangeEvent<HTMLInputElement>) => setLevel(event.target.value)}/>
                <datalist id={"lang_level"}>
                    {(Object.keys(levels) as (keyof typeof levels)[]).map((element, index) => <option key={"option_"+index} value={levels[element]}></option> )}
                </datalist>
                <SubmitButton onClick={onSubmit} name={"Add"}/>
            </div>
        </>
    )
};