import {FC, useEffect, useState} from "react";
import {dFillStepsPropsType, FillStepsPropsType} from "./FillStepsContainer";
import {AddProject} from "../../features/AddProject/AddProject.tsx";
import {Step} from "../../entities/Step/Step.tsx";
import {AddLinks, linkType} from "../../entities/addLinks/AddLinks.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {AddTechnology} from "../../entities/AddTechnology/AddTechnology.tsx";
import {AddLanguage, levels} from "../../entities/AddLanguage/AddLanguage.tsx";
import {AddEducation} from "../../features/AddEducation/AddEducation.tsx";
import {Dropdown} from "../../entities/Dropdown/Dropdown.tsx";

export const FillSteps: FC<FillStepsPropsType & dFillStepsPropsType> = (props) => {

    const [links, setLinks] = useState<linkType[]>([])
    const [stack, setStack] = useState<string[]>([])
    const [languages, setLanguages] = useState<{ lang: string, level: levels }[]>([])

    function getData(data: any) {
        props.changePosition(props.position + 1)
        if (data.hasOwnProperty("photo")) data.photo = URL.createObjectURL(data.photo[0])
        props.setMainData(data)
    }

    const forms = props.forms.filter((element, index) => index <= 2 && element).map((element, index) => <Dropdown
        header={element.header} key={"form_" + index} isOpen={props.position == index} isDone={props.position > index - 1}><Step
         header={element.header}><Form reset={false} step={element} button={"Save"}
                                                            getData={getData}/></Step></Dropdown>)
    debugger
    return (
        <>
            {forms}


            <Dropdown header={"Links"} isOpen={props.position == 3} isDone={props.position > 2}>
                <Step onClick={() => {
                    props.setLinks(links)
                    props.changePosition(4)
                }} header={"Links"}>
                    <AddLinks links={links} getData={(data: linkType[]) => setLinks(data)}/>
                </Step>
            </Dropdown>

            <Dropdown header={"Languages"} isOpen={props.position == 4} isDone={props.position > 3}>
                <Step onClick={() => {
                    props.setLanguages(languages)
                    props.changePosition(5)
                }} header={"Languages"}>
                    <AddLanguage languages={languages}
                                 getData={(data: { lang: string, level: levels }[]) => setLanguages(data)}/>
                </Step>
            </Dropdown>

            <Dropdown header={"Stack"} isOpen={props.position == 5} isDone={props.position > 4}>
                <Step onClick={() => {
                    props.setStack(stack)
                    props.changePosition(6)
                }} header={"Stack"}>
                    <AddTechnology stack={stack} getData={(data: string[]) => setStack(data)}/>
                </Step>
            </Dropdown>

            <Dropdown header={"Projects(Experience)"} isOpen={props.position == 6} isDone={props.position > 5}><AddProject step={props.forms[3]}/></Dropdown>
            <Dropdown header={"Education"} isOpen={props.position == 7} isDone={props.position > 6}><AddEducation step={props.forms[4]}/></Dropdown>

        </>
    )
}