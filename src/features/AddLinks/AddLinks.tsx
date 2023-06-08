import {useDispatch} from "react-redux";
import {useState} from "react";
import {Step} from "../../entities/Step/Step.tsx";
import {LinksForm, linkType} from "../../entities/LinksForm/LinksForm.tsx";
import {changePosition, setLinks} from "../../App/Redux/formsReducer.ts";

export const AddLinks = () => {

    const dispatch = useDispatch()
    const dChangePosition = (add: number) => dispatch(changePosition(add))
    const dSetLinks = (_data: linkType[]) => dispatch(setLinks(_data))
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