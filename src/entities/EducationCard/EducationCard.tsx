import {FC} from 'react';
import st from './EducationCard.module.css'
import {IEducationData} from "../../features/AddEducation/AddEducationModel.ts";

export const EducationCard: FC<IEducationData> = (props) => {

    return (
        <>
            <div className={st.container}>
                <div className={st.header}>
                    <h3 className={st.name}>{props.name}</h3>
                    <p className={st.city}>{props.city}</p>
                </div>
                <p className={st.date}>{props.start_date} - {props.finish_date}</p>
                <p>{props.caption}</p>
            </div>
        </>
    )
};