
import {connect} from "react-redux";
import {RootState} from "../App/Redux/store";
import {Dispatch} from "react";
import {setResumeData, stepType} from "../../App/Redux/formsReducer";
import {FillSteps} from "./FillSteps";


export type FillStepsPropsType = {
    forms: stepType[],
}
function mapStateToProps(state: RootState): FillStepsPropsType{
    return{
        forms: state.forms.forms
    }
}

export type dFillStepsPropsType = {
    setMainData(data: any): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dFillStepsPropsType{
    return{
        setMainData(data: any){
            dispatch(setResumeData(data))
        }
    }
}

export const FillStepsContainer = connect(mapStateToProps, mapDispatchToProps)(FillSteps)