import {ChangeEvent, FC, useState} from 'react';
import {IAddLanguageProps, levels} from "./LanguageFormModel.ts";
import {ItemBrick} from "../../shared/ItemBrick/ItemBrick.tsx";
import {ListForm} from "../../shared/ListForm/ListForm.tsx";

export const LanguageForm: FC<IAddLanguageProps> = (props) => {
    const [lang, setLang] = useState("")
    const [level, setLevel] = useState<string>("")

    const onSubmit = () => {
        console.log(lang, level)
        if (lang.length > 0) {
            props.languages.push({lang, level})
            setLang("")
            setLevel("")
            props.getData && props.getData(props.languages);
        }
    }

    const inputs = props.languages.map((element, index) => <ItemBrick key={"object_language_" + index}
                                                                      name={element.lang + " - " + element.level}/>)


    return (
        <>
            <ListForm bricks={inputs} onSubmit={onSubmit}>
                <input style={{width: "140px"}} placeholder={"Enter language"} name={"language"} value={lang}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setLang(event.target.value)}/>
                <input style={{width: "140px"}} placeholder={"Enter your level"} value={level} type={"text"}
                       list={"lang_level"}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setLevel(event.target.value)}/>
                <datalist id={"lang_level"}>
                    {(Object.keys(levels) as (keyof typeof levels)[]).map((element, index) => <option
                        key={"option_" + index} value={levels[element]}></option>)}
                </datalist>
            </ListForm>
        </>
    )
};