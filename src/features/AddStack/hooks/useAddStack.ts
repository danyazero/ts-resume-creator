import {useDispatch} from "react-redux";
import {changePosition, setStack} from "../../../App/Redux/formsReducer.ts";

export interface IUseAddLanguages{
    dChangePosition(add: number): void,
    dSetStack(_data: string[]): void,
}
export const useAddStack = (): IUseAddLanguages => {
    const dispatch = useDispatch()
    const dChangePosition = (add: number) => dispatch(changePosition(add))
    const dSetStack = (_data: string[]) => dispatch(setStack(_data))

    return{
        dSetStack,
        dChangePosition
    }
}