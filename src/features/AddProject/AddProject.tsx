import {ChangeEvent, FC, useState} from 'react';
import {LinksForm} from "../../entities/LinksForm/LinksForm.tsx";
import {ProjectCard} from "../../entities/ProjectCard/ProjectCard.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {TechnologyForm} from "../../entities/TechnologyForm/TechnologyForm.tsx";
import {formatDateFromString} from "../utils.ts";
import {Step} from "../../entities/Step/Step.tsx";
import {IProjectData, linkType} from "./AddProjectModel.ts";
import {useAddProject} from "./hooks/useAddProject.ts";

export const AddProject: FC = () => {
    const [data, setData] = useState<IProjectData[]>([])
    const [projectLinks, setProjectLinks] = useState<linkType[]>([])
    const [projectStack, setProjectStack] = useState<string[]>([])
    const [header, setHeader] = useState("")

    const {step, dSetProjectData, dChangePosition} = useAddProject()

    function saveData(){
        dSetProjectData(header, data)
        dChangePosition(1)
    }

    function getFormData(_data: IProjectData){
        _data.links = projectLinks
        _data.stack = projectStack
        _data.start_date = formatDateFromString(_data.start_date)
        _data.finish_date = formatDateFromString(_data.finish_date)
        setData(prevState => [...prevState, _data])
        setProjectLinks([])
        setProjectStack([])
    }

    const projects = data.map((element, index) => <ProjectCard key={"project_" + index} stack={element.stack} name={element.name} start_date={element.start_date} finish_date={element.finish_date} caption={element.caption} links={element.links}/>)

    return (
        <>

            <Step header={step.header} onClick={saveData}>
                    <input placeholder={"Enter Header"} list={"header_text"} value={header} onChange={(event: ChangeEvent<HTMLInputElement>) => setHeader(event.target.value)} required={true}/>
                    <datalist id={"header_text"}>
                        <option value={"Projects"}/>
                        <option value={"Pet-projects"}/>
                        <option value={"Work experience"}/>
                    </datalist>

                    {projects}

                    <Form reset={true} step={step} getData={getFormData}>
                        <LinksForm links={projectLinks} getData={setProjectLinks}/>
                        <TechnologyForm stack={projectStack} getData={setProjectStack}/>
                    </Form>
            </Step>

        </>
    )
};