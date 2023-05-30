import {FC, useEffect, useState} from 'react';
import st from "./AddProject.module.css"
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton"
import {useForm} from "react-hook-form";
import {AddLinks} from "../addLinks/AddLinks.tsx";
import {ProjectCard} from "../../entities/ProjectCard/ProjectCard.tsx";

export type projectDataType = {
    name: string,
    start_date: string,
    finish_date: string,
    caption: string,
    links: linkType[]
}

export type AddProjectPropsType = {
    getData?(data: projectDataType[]): void
}

export type linkType = {name: string, href: string}
export const AddProject: FC<AddProjectPropsType> = (props) => {
    const [projectData, setProjectData] = useState<projectDataType[]>([])
    const [projectLinks, setProjectLinks] = useState<linkType[]>([])
    const {register, handleSubmit, resetField} = useForm();

    function getLinks(data: linkType[]){
        setProjectLinks(data)
    }

    const onSubmit = (data: any) => {
        data.links = projectLinks
        setProjectData(prevState => [...prevState, data])
        
        resetField('name')
        resetField('start_date')
        resetField('finish_date')
        resetField('caption')
        setProjectLinks([])
    }
    useEffect(() => {
        console.log(projectLinks)
    }, [projectLinks])

    useEffect(() => {
        // if(props.getData) props.getData(projectData);
        console.info(projectData)
    }, [projectData])

    const projects = projectData.map((element, index) => <ProjectCard key={"project_" + index} name={element.name} start_date={element.start_date} finish_date={element.finish_date} caption={element.caption} links={element.links}/>)

    return (
        <>

            {projects}
            <form className={st.addProject} onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={"Enter name"} {...register("name", {required: true})}/>
                <input type='date' placeholder={"Enter start date"} {...register("start_date", {required: true})}/>
                <input type='date' placeholder={"Enter finish date"} {...register("finish_date", {required: true})}/>
                <input placeholder={"Enter caption"} {...register("caption", {required: false})}/>
                <AddLinks links={projectLinks} getData={getLinks}/>
                <SubmitButton name={"Add"}/>
            </form>
            <div>
                <SubmitButton onClick={() => console.log("next button")} name={"Next"}/>
            </div>

        </>
    )
};