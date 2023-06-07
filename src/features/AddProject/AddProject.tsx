import {ChangeEvent, FC, useEffect, useState} from 'react';
import {AddLinks} from "../../entities/addLinks/AddLinks.tsx";
import {ProjectCard} from "../../entities/ProjectCard/ProjectCard.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {changePosition, setProjectData, stepType} from "../../App/Redux/formsReducer.ts";
import {useDispatch} from "react-redux";
import {AddTechnology} from "../../entities/AddTechnology/AddTechnology.tsx";
import {formatDateFromString} from "../utils.ts";
import {Step} from "../../entities/Step/Step.tsx";

export type projectDataType = {
    name: string,
    start_date: string,
    finish_date: string,
    caption: string,
    links: linkType[],
    stack: string[]
}

export type AddProjectPropsType = {
    step: stepType
}

export type linkType = {name: string, href: string}
export const AddProject: FC<AddProjectPropsType> = (props) => {
    const [data, setData] = useState<projectDataType[]>([])
    const [projectLinks, setProjectLinks] = useState<linkType[]>([])
    const [projectStack, setProjectStack] = useState<string[]>([])
    const [header, setHeader] = useState("")

    const dispatch = useDispatch()


    function getLinks(data: linkType[]){
        setProjectLinks(data)
    }

    function getStack(data: string[]){
        setProjectStack(data)
    }

    function saveData(){
        dispatch(setProjectData({header, array: data}))
        dispatch(changePosition(7))
    }

    function getFormData(_data: projectDataType){
        _data.links = projectLinks
        _data.stack = projectStack
        _data.start_date = formatDateFromString(_data.start_date)
        _data.finish_date = formatDateFromString(_data.finish_date)
        setData(prevState => [...prevState, _data])
        setProjectLinks([])
        setProjectStack([])
    }

    useEffect(() => {
        console.info(data)
    }, [data])

    const projects = data.map((element, index) => <ProjectCard key={"project_" + index} stack={element.stack} name={element.name} start_date={element.start_date} finish_date={element.finish_date} caption={element.caption} links={element.links}/>)

    return (
        <>

            <Step header={props.step.header} onClick={saveData}>
                    <input placeholder={"Enter Header"} value={header} onChange={(event: ChangeEvent<HTMLInputElement>) => setHeader(event.target.value)} required={true}/>

                    {projects}

                    <Form reset={true} step={props.step} getData={getFormData}>
                        <AddLinks links={projectLinks} getData={getLinks}/>
                        <AddTechnology stack={projectStack} getData={getStack}/>
                    </Form>
            </Step>

        </>
    )
};