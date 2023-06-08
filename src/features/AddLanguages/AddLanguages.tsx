import {useDispatch} from "react-redux";
import {useState} from "react";
import {Step} from "../../entities/Step/Step.tsx";
import {LanguageForm, languageType} from "../../entities/LanguageForm/LanguageForm.tsx";
import {changePosition, setLanguages} from "../../App/Redux/formsReducer.ts";

export const AddLanguages = () => {

    const dispatch = useDispatch()
    const dChangePosition = (add: number) => dispatch(changePosition(add))
    const dSetLanguages = (_data: languageType[]) => dispatch(setLanguages(_data))
    const [_languages, _setLanguages] = useState<languageType[]>([])

    return(
        <>
            <Step onClick={() => {
                dSetLanguages(_languages)
                dChangePosition(1)
            }} header={"Languages"}>
                <LanguageForm languages={_languages}
                              getData={(data: languageType[]) => _setLanguages(data)}/>
            </Step>
        </>
    )
}