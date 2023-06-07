
import {connect} from "react-redux";
import {Dispatch} from "react";
import {changePosition, setLanguages, setLinks, setResumeData, setStack, stepType} from "../../App/Redux/formsReducer";
import {FillSteps} from "./FillSteps";
import {RootState} from "../../App/Redux/store.ts";
import {linkType} from "../../entities/addLinks/AddLinks.tsx";
import {levels} from "../../entities/AddLanguage/AddLanguage.tsx";
import {ILanguage} from "../../PdfConstructor/PDFView.tsx";


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
    setLinks(data: linkType[]): void,
    setLanguages(data: ILanguage[]): void,
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
        setLanguages(data: ILanguage[]){
            dispatch(setLanguages(data))
        },
        setLinks(data: linkType[]){
            dispatch(setLinks(data))
        },
        setStack(data: string[]){
            dispatch(setStack(data))
        }
    }
}

export const FillStepsContainer = connect(mapStateToProps, mapDispatchToProps)(FillSteps)