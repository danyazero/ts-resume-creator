import {ChangeEvent, FC, useState} from 'react';
import st from './LanguageForm.module.css'
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

export type languageType = { lang: string, level: string }

export type AddLanguagePropsType = {
    languages: languageType[]
    getData?(data: languageType[]): void
}

export const LanguageForm: FC<AddLanguagePropsType> = (props) => {
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
        <div className={st.addTechnologyContainer}>
            <div className={st.bricksContainer}>{inputs}</div>
            <div className={st.addTechnology}>
                <input style={{width: "140px"}} placeholder={"Enter language"} name={"language"} value={lang} onChange={(event:  ChangeEvent<HTMLInputElement>) => setLang(event.target.value)}/>
                <input style={{width: "140px"}} placeholder={"Enter your level"} value={level} type={"text"} list={"lang_level"} onChange={(event:  ChangeEvent<HTMLInputElement>) => setLevel(event.target.value)}/>
                <datalist id={"lang_level"}>
                    {(Object.keys(levels) as (keyof typeof levels)[]).map((element, index) => <option key={"option_"+index} value={levels[element]}></option> )}
                </datalist>
                <SubmitButton width={"75px"} onClick={onSubmit} name={"Add"}/>
            </div>
        </div>
    )
};