import {FC} from "react";
import st from "./ItemBrick.module.css";

export interface IItemBrickProps{
    name: string,
    href?: string
}

export const ItemBrick: FC<IItemBrickProps> = (props) => {
    return(
        <>
            <div className={st.brick}>
                <a href={props.href && props.href}>{props.name}</a>
            </div>
        </>
    )
}