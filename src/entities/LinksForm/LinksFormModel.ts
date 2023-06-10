import {linkType} from "../../features/AddProject/AddProjectModel.ts";

export interface IAddLinksProps {
    links: linkType[]
    getData?(data: linkType[]): void
}