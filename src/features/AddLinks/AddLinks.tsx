import {useState} from "react";
import {Step} from "../../entities/Step/Step.tsx";
import {LinksForm} from "../../entities/LinksForm/LinksForm.tsx";
import {linkType} from "../AddProject/AddProjectModel.ts";
import {useAddLinks} from "./hooks/useAddLinks.ts";

export const AddLinks = () => {

    const {dSetLinks, dChangePosition} = useAddLinks()
    const [_links, _setLinks] = useState<linkType[]>([])

    return(
        <>
            <Step onClick={() => {
                dSetLinks(_links)
                dChangePosition(1)
            }} header={"Links"}>
                <LinksForm links={_links} getData={(data: linkType[]) => _setLinks(data)}/>
            </Step>
        </>
    )
}