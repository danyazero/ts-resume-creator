import {ChangeEvent, FC, useEffect, useState} from 'react';
import st from './LinksForm.module.css'
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";

export type AddLinksPropsType = {
    links: linkType[]
    getData?(data: linkType[]): void
}

export type linkType = { name: string, href: string }
export const LinksForm: FC<AddLinksPropsType> = (props) => {
    const [name, setName] = useState("")
    const [link, setLink] = useState("")

    const onSubmit = () => {
        if (props.getData && (name.length > 0 && link.length > 0)) props.getData([...props.links, {name, href: link}]);
        setName("")
        setLink("")
    }

    const inputs = props.links.map((element, index) => <div className={st.links} key={"object_" + index}><a
        href={element.href}>{element.name}</a></div>)


    return (
        <div className={st.addLinkContainer}>

            <div className={st.bricksContainer}>
                {inputs}
            </div>
            <div className={st.addLink}>
                <input style={{width: "140px"}} placeholder={"Enter link name"} name={"name"} value={name}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/>
                <input style={{width: "140px"}} placeholder={"Enter link"} name={"href"} value={link}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setLink(event.target.value)}/>
                <SubmitButton width={"75px"} onClick={onSubmit} name={"Add"}/>
            </div>
        </div>
    )
};