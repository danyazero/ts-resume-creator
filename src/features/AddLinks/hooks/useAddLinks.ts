import {useDispatch} from "react-redux";
import {changePosition, setLinks} from "../../../App/Redux/formsReducer.ts";
import {linkType} from "../../AddProject/AddProjectModel.ts";

export interface IUseAddLinks{
    dChangePosition(add: number): void,
    dSetLinks(_data: linkType[]): void
}
export const useAddLinks = (): IUseAddLinks => {
    const dispatch = useDispatch()
    const dChangePosition = (add: number) => dispatch(changePosition(add))
    const dSetLinks = (_data: linkType[]) => dispatch(setLinks(_data))

    return{
        dSetLinks,
        dChangePosition
    }
}