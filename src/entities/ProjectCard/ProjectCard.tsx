import {ChangeEvent, FC, useEffect, useState} from 'react';
import st from './ProjectCard.module.css'
import {projectDataType} from "../../features/AddProject/AddProject.tsx";

export const ProjectCard: FC<projectDataType> = (props) => {
    const start_date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short'}).format(new Date(props.start_date));
    const finish_date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short'}).format(new Date(props.finish_date));

    const links = props.links.map((element, index) => <div className={st.link} key={"object_" + index}><a
        href={element.href}>{element.name}</a></div>)
    return (
        <>
            <div className={st.container}>
                <h3 className={st.name}>{props.name}</h3>
                <p className={st.date}>{start_date} - {finish_date}</p>
                <p>{props.caption}</p>
                <div className={st.links}>{links}</div>
            </div>
        </>
    )
};