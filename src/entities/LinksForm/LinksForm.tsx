import {ChangeEvent, FC, useState} from 'react';
import {IAddLinksProps} from "./LinksFormModel.ts";
import {ItemBrick} from "../../shared/ItemBrick/ItemBrick.tsx";
import {ListForm} from "../../shared/ListForm/ListForm.tsx";

export const LinksForm: FC<IAddLinksProps> = (props) => {
    const [name, setName] = useState("")
    const [link, setLink] = useState("")

    const onSubmit = () => {
        if ((name.length > 0 && link.length > 0)) {
            setName("")
            setLink("")
            props.getData && props.getData([...props.links, {name, href: link}]);
        }
    }

    const inputs = props.links.map((element, index) => <ItemBrick key={"object_link_" + index} name={element.name}
                                                                  href={element.href}/>)


    return (
        <>
            <ListForm bricks={inputs} onSubmit={onSubmit}>
                <input style={{width: "140px"}} placeholder={"Enter link name"} name={"name"} value={name}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}/>
                <input style={{width: "140px"}} placeholder={"Enter link"} name={"href"} value={link}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setLink(event.target.value)}/>
            </ListForm>
        </>
    )
};