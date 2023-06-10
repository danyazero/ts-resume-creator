import {useDispatch} from "react-redux";
import {changePosition, setLanguages} from "../../../App/Redux/formsReducer.ts";
import {languageType} from "../../../entities/LanguageForm/LanguageFormModel.ts";

export interface IUseAddLanguages{
    dChangePosition(add: number): void,
    dSetLanguages(_data: languageType[]): void
}
export const useAddLanguages = (): IUseAddLanguages => {
    const dispatch = useDispatch()
    const dChangePosition = (add: number) => dispatch(changePosition(add))
    const dSetLanguages = (_data: languageType[]) => dispatch(setLanguages(_data))

    return{
        dSetLanguages,
        dChangePosition
    }
}