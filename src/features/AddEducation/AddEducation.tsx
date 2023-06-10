import {FC, useState} from 'react';
import {Form} from "../../entities/Form/Form.tsx";
import {EducationCard} from "../../entities/EducationCard/EducationCard.tsx";
import {formatDateFromString} from "../utils.ts";
import {Step} from "../../entities/Step/Step.tsx";
import {IEducationData} from "./AddEducationModel.ts";
import {useAddEducation} from "./hooks/useAddEducation.ts";

export const AddEducation: FC = () => {
    const [data, setData] = useState<IEducationData[]>([])

    const {step, dSetEducationData, dChangePosition} = useAddEducation()

    function saveData(){
        dSetEducationData(data)
        dChangePosition(1)
    }

    function getFormData(_data: IEducationData){
        _data.start_date = formatDateFromString(_data.start_date)
        _data.finish_date = formatDateFromString(_data.finish_date)
        setData(prevState => [...prevState, _data])
    }


    const education = data.map((element, index) => <EducationCard key={"project_" + index} name={element.name} city={element.city} start_date={element.start_date} finish_date={element.finish_date} caption={element.caption}/>)

    return (
        <>

                <Step header={step.header} onClick={saveData}>
                    {education}
                    <Form reset={true} step={step} getData={getFormData}></Form>
                </Step>

        </>
    )
};