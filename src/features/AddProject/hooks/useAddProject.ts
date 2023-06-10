import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../App/Redux/store.ts";
import {changePosition, setProjectData, stepType} from "../../../App/Redux/formsReducer.ts";
import {IProjectData} from "../AddProjectModel.ts";

export interface IUseAddProject {
    step: stepType,
    dSetProjectData(header: string, data: IProjectData[]): void,
    dChangePosition(number: number): void
}

export const useAddProject = (): IUseAddProject => {
    const dispatch = useDispatch()
    const step = useSelector((state: RootState) => state.forms.forms[3])
    const dSetProjectData = (header: string, data: IProjectData[]) => dispatch(setProjectData({header, array: data}))
    const dChangePosition = (number: number) => dispatch(changePosition(number))

    return {
        step,
        dSetProjectData,
        dChangePosition
    }
}