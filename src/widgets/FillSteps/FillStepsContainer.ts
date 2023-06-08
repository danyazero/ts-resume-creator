
import {connect} from "react-redux";
import {Dispatch} from "react";
import {changePosition, setResumeData, stepType} from "../../App/Redux/formsReducer";
import {FillSteps} from "./FillSteps";
import {RootState} from "../../App/Redux/store.ts";


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
}

function mapDispatchToProps(dispatch: Dispatch<any>): dFillStepsPropsType{
    return{
        setMainData(data: any){
            dispatch(setResumeData(data))
        },
        changePosition(add: number){
            dispatch(changePosition(add))
        },
    }
}

export const FillStepsContainer = connect(mapStateToProps, mapDispatchToProps)(FillSteps)