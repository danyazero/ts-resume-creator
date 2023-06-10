import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../App/Redux/store.ts";
import {changePosition, setEducation, stepType} from "../../../App/Redux/formsReducer.ts";
import {IEducationData} from "../AddEducationModel.ts";

export interface IUseAddProject {
    step: stepType,
    dSetEducationData(data: IEducationData[]): void,
    dChangePosition(number: number): void
}

export const useAddEducation = (): IUseAddProject => {
    const dispatch = useDispatch()
    const step = useSelector((state: RootState) => state.forms.forms[4])
    const dSetEducationData = (data: IEducationData[]) => dispatch(setEducation(data))
    const dChangePosition = (number: number) => dispatch(changePosition(number))

    return {
        step,
        dSetEducationData,
        dChangePosition
    }
}