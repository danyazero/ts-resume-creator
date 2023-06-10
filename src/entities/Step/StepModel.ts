import {ReactNode} from "react";

export interface IStepProps {
    header: string
    children?: ReactNode
    onClick?(): void
}