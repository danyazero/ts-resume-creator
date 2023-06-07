
import {connect} from "react-redux";
import {Dispatch} from "react";
import {changePosition, setLinks, setResumeData, setStack, stepType} from "../../App/Redux/formsReducer";
import {FillSteps} from "./FillSteps";
import {RootState} from "../../App/Redux/store.ts";
import {linkType} from "../../entities/addLinks/AddLinks.tsx";
import {levels} from "../../entities/AddLanguage/AddLanguage.tsx";


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
    setLinks(data: {links: linkType[], langs: {lang: string, level: levels}[]}): void,
    setStack(data: string[]): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dFillStepsPropsType{
    return{
        setMainData(data: any){
            dispatch(setResumeData(data))
        },
        changePosition(add: number){
            dispatch(changePosition(add))
        },
        setLinks(data: {links: linkType[], langs: {lang: string, level: levels}[]}){
            dispatch(setLinks(data))
        },
        setStack(data: string[]){
            dispatch(setStack(data))
        }
    }
}

export const FillStepsContainer = connect(mapStateToProps, mapDispatchToProps)(FillSteps)