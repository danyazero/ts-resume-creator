import {ChangeEvent, FC, useEffect, useState} from 'react';
import {AddLinks} from "../../shared/addLinks/AddLinks.tsx";
import {ProjectCard} from "../../entities/ProjectCard/ProjectCard.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {changePosition, setProjectData, stepType} from "../../App/Redux/formsReducer.ts";
import {useDispatch} from "react-redux";

export type projectDataType = {
    name: string,
    start_date: string,
    finish_date: string,
    caption: string,
    links: linkType[]
}

export type AddProjectPropsType = {
    step: stepType
}

export type linkType = {name: string, href: string}
export const AddProject: FC<AddProjectPropsType> = (props) => {
    const [data, setData] = useState<projectDataType[]>([])
    const [projectLinks, setProjectLinks] = useState<linkType[]>([])
    const [header, setHeader] = useState("")

    const dispatch = useDispatch()


    function getLinks(data: linkType[]){
        setProjectLinks(data)
    }

    function nextPosition(){
        dispatch(changePosition(+1))
        dispatch(setProjectData({header, array: data}))
    }

    function getFormData(_data: projectDataType){
        _data.links = projectLinks
        _data.start_date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short'}).format(new Date(_data.start_date));
        _data.finish_date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short'}).format(new Date(_data.finish_date));
        setData(prevState => [...prevState, _data])
        setProjectLinks([])
    }

    useEffect(() => {
        console.info(data)
    }, [data])

    const projects = data.map((element, index) => <ProjectCard key={"project_" + index} name={element.name} start_date={element.start_date} finish_date={element.finish_date} caption={element.caption} links={element.links}/>)

    return (
        <>


                <div>
                    <input placeholder={"Enter Header"} value={header} onChange={(event: ChangeEvent<HTMLInputElement>) => setHeader(event.target.value)} required={true}/>

                    {projects}

                    <Form step={props.step} getData={getFormData} next={nextPosition} prev={() => {console.log("prev button")}}>
                        <AddLinks links={projectLinks} getData={getLinks}/>
                    </Form>
                </div>

        </>
    )
};