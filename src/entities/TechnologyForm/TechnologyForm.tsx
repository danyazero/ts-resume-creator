import {ChangeEvent, FC, useState} from 'react';
import {IAddLinksPropsType} from "./TechnologyFormModel.ts";
import {ItemBrick} from "../../shared/ItemBrick/ItemBrick.tsx";
import {ListForm} from "../../shared/ListForm/ListForm.tsx";

export const TechnologyForm: FC<IAddLinksPropsType> = (props) => {
    const [technology, setTechnology] = useState("")

    const onSubmit = () => {
        if (technology.length > 0) {
            props.stack.push(technology)
            setTechnology("")
            props.getData && props.getData(props.stack);
        }
    }

    const inputs = props.stack.map((element, index) => <ItemBrick key={"object_technology_" + index} name={element}/>)


    return (
        <>
            <ListForm bricks={inputs} onSubmit={onSubmit}>
                <input placeholder={"Enter technology"} name={"technology"} value={technology}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setTechnology(event.target.value)}/>
            </ListForm>
        </>
    )
};