import {FC, useState} from "react";
import {dFillStepsPropsType, FillStepsPropsType} from "./FillStepsContainer";
import {AddProject} from "../../features/AddProject/AddProject.tsx";
import {Step} from "../../entities/Step/Step.tsx";
import {AddLinks, linkType} from "../../entities/addLinks/AddLinks.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {AddTechnology} from "../../entities/AddTechnology/AddTechnology.tsx";
import {AddLanguage, levels} from "../../entities/AddLanguage/AddLanguage.tsx";
import {AddEducation} from "../../features/AddEducation/AddEducation.tsx";

export const FillSteps: FC<FillStepsPropsType & dFillStepsPropsType> = (props) => {

    const [links, setLinks] = useState<linkType[]>([])
    const [stack, setStack] = useState<string[]>([])
    const [languages, setLanguages] = useState<{ lang: string, level: levels }[]>([])

    function getData(data: any) {
        if (props.position == 0) data.photo = URL.createObjectURL(data.photo[0])
        props.setMainData(data)
        props.changePosition(1)
    }

    return (
        <>
            {props.position <= 2 &&
                <Form step={props.forms[props.position]} prev={() => props.changePosition(-1)} getData={getData}/>}

            {props.position == 3 &&
                <Step header={"Links"} previous={() => props.changePosition(-1)} next={() => {
                    props.setLinks({links, langs: languages})
                    props.changePosition(1)
                }}>
                    <AddLinks links={links} getData={(data: linkType[]) => setLinks(data)}/>
                    <AddLanguage languages={languages}
                                 getData={(data: { lang: string, level: levels }[]) => setLanguages(data)}/>
                </Step>
            }

            {props.position == 4 && <Step header={"Stack"} previous={() => props.changePosition(-1)} next={() => {
                props.setStack(stack)
                props.changePosition(1)
            }}><AddTechnology stack={stack} getData={(data: string[]) => setStack(data)}/></Step>}

            {props.position == 5 && <AddProject step={props.forms[3]}/>}
            {props.position == 6 && <AddEducation step={props.forms[4]}/>}
        </>
    )
}