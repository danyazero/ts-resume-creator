import {ChangeEvent, FC, useEffect, useState} from 'react';
import st from './ProjectCard.module.css'
import {projectDataType} from "../../features/AddProject/AddProject.tsx";

export const ProjectCard: FC<projectDataType> = (props) => {

    const links = props.links.map((element, index) => <div className={st.link} key={"object_" + index}><a
        href={element.href}>{element.name}</a></div>)
    return (
        <>
            <div className={st.container}>
                <h3 className={st.name}>{props.name}</h3>
                <p className={st.date}>{props.start_date} - {props.finish_date}</p>
                <p>{props.caption}</p>
                <div className={st.links}>{links}</div>
            </div>
        </>
    )
};