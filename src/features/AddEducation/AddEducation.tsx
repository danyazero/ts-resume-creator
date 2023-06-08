import {FC, useState} from 'react';
import {Form} from "../../entities/Form/Form.tsx";
import {changePosition, setEducation} from "../../App/Redux/formsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {EducationCard} from "../../entities/EducationCard/EducationCard.tsx";
import {formatDateFromString} from "../utils.ts";
import {Step} from "../../entities/Step/Step.tsx";
import {RootState} from "../../App/Redux/store.ts";

export type educationDataType = {
    name: string,
    start_date: string,
    finish_date: string,
    city: string,
    caption: string,
}

// export type AddEducationPropsType = {
// }
export const AddEducation: FC = () => {
    const [data, setData] = useState<educationDataType[]>([])

    const dispatch = useDispatch()
    const step = useSelector((state: RootState) => state.forms.forms[4])

    function saveData(){
        dispatch(setEducation(data))
        dispatch(changePosition(1))
    }

    function getFormData(_data: educationDataType){
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