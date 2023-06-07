import {ChangeEvent, FC, useEffect, useState} from 'react';
import st from './EducationCard.module.css'
import {projectDataType} from "../../features/AddProject/AddProject.tsx";
import {educationDataType} from "../../features/AddEducation/AddEducation.tsx";

export const EducationCard: FC<educationDataType> = (props) => {

    debugger

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