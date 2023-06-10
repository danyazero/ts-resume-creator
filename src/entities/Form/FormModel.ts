import {ReactNode} from "react";
import {stepType} from "../../App/Redux/formsReducer.ts";

export interface IForm {
    children?: ReactNode,
    step: stepType,
    button?: string,
    reset: boolean,
    getData?(data: any): void
}