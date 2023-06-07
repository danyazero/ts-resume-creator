import {FC, useState} from 'react';
import {ProjectCard} from "../../entities/ProjectCard/ProjectCard.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {changePosition, setEducation, setProjectData, stepType} from "../../App/Redux/formsReducer.ts";
import {useDispatch} from "react-redux";
import {EducationCard} from "../../entities/EducationCard/EducationCard.tsx";
import {formatDateFromString} from "../utils.ts";

export type educationDataType = {
    name: string,
    start_date: string,
    finish_date: string,
    city: string,
    caption: string,
}

export type AddEducationPropsType = {
    step: stepType
}
export const AddEducation: FC<AddEducationPropsType> = (props) => {
    const [data, setData] = useState<educationDataType[]>([])

    const dispatch = useDispatch()

    function nextPosition(){
        dispatch(changePosition(+1))
        dispatch(setEducation(data))
    }

    function getFormData(_data: educationDataType){
        _data.start_date = formatDateFromString(_data.start_date)
        _data.finish_date = formatDateFromString(_data.finish_date)
        setData(prevState => [...prevState, _data])
    }


    const education = data.map((element, index) => <EducationCard key={"project_" + index} name={element.name} city={element.city} start_date={element.start_date} finish_date={element.finish_date} caption={element.caption}/>)

    return (
        <>

                <div>
                    {education}
                    <Form step={props.step} getData={getFormData} next={nextPosition} prev={() => {console.log("prev button")}}></Form>
                </div>

        </>
    )
};