import {ChangeEvent, FC, useEffect, useState} from 'react';
import st from './AddLinks.module.css'
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton";

export type AddLinksPropsType = {
    links: linkType[]
    getData?(data: linkType[]): void
}

export type linkType = { name: string, href: string }
export const AddLinks: FC<AddLinksPropsType> = (props) => {
    const [name, setName] = useState("")
    const [link, setLink] = useState("")

    const onSubmit = () => {
        if(props.getData) props.getData( [...props.links, {name, href: link}]);
        setName("")
        setLink("")
    }

    const inputs = props.links.map((element, index) => <div className={st.links} key={"object_" + index}><a
        href={element.href}>{element.name}</a></div>)


    return (
        <>
            {inputs}
                <div className={st.addLink}>
                    <input placeholder={"Enter link name"} name={"name"} value={name} onChange={(event:  ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/>
                    <input placeholder={"Enter link"} name={"href"} value={link} onChange={(event:  ChangeEvent<HTMLInputElement>) => setLink(event.target.value)}/>
                    <SubmitButton onClick={onSubmit} name={"Add"}/>
                </div>
        </>
    )
};