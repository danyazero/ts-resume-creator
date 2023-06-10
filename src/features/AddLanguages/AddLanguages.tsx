import {useState} from "react";
import {Step} from "../../entities/Step/Step.tsx";
import {LanguageForm} from "../../entities/LanguageForm/LanguageForm.tsx";
import {languageType} from "../../entities/LanguageForm/LanguageFormModel.ts";
import {useAddLanguages} from "./hooks/useAddLanguages.ts";

export const AddLanguages = () => {

    const {dSetLanguages, dChangePosition} = useAddLanguages()
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