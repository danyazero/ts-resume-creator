
import {connect} from "react-redux";
import {Dispatch} from "react";
import {changePosition, setLinks, setResumeData, stepType} from "../../App/Redux/formsReducer";
import {FillSteps} from "./FillSteps";
import {RootState} from "../../App/Redux/store.ts";
import {linkType} from "../../shared/addLinks/AddLinks.tsx";


export type FillStepsPropsType = {
    forms: stepType[],
    position: number
}
function mapStateToProps(state: RootState): FillStepsPropsType{
    return{
        forms: state.forms.forms,
        position: state.forms.position
    }
}

export type dFillStepsPropsType = {
    setMainData(data: any): void,
    changePosition(add: number): void,
    setLinks(data: linkType[]): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dFillStepsPropsType{
    return{
        setMainData(data: any){
            dispatch(setResumeData(data))
        },
        changePosition(add: number){
            dispatch(changePosition(add))
        },
        setLinks(data: linkType[]){
            dispatch(setLinks(data))
        }
    }
}

export const FillStepsContainer = connect(mapStateToProps, mapDispatchToProps)(FillSteps)