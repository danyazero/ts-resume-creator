import {FC, useState} from "react";
import {dFillStepsPropsType, FillStepsPropsType} from "./FillStepsContainer";
import {AddProject} from "../../features/AddProject/AddProject.tsx";
import {Step} from "../../entities/Step/Step.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../App/Redux/store.ts";
import {AddLinks, linkType} from "../../shared/addLinks/AddLinks.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {changePosition, setLinks, setResumeData} from "../../App/Redux/formsReducer.ts";

export const FillSteps: FC<FillStepsPropsType & dFillStepsPropsType> = (props) => {

    const [links, setLinks] = useState<linkType[]>([])

    function getData(data: any) {
        props.setMainData(data)
        props.changePosition(1)
    }

    return (
        <>
            {props.position <= 2 &&
                <Form step={props.forms[props.position]} prev={() => props.changePosition(-1)} getData={getData}/>}

            {props.position == 3 && <Step header={"Links"} previous={() => props.changePosition(-1)} next={() => {
                props.setLinks(links)
                props.changePosition(1)
            }}><AddLinks links={links} getData={(data: linkType[]) => setLinks(data)}/> </Step>}

            {props.position == 4 && <AddProject step={props.forms[3]}/>}

        </>
    )
}