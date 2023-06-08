import {TechnologyForm} from "../../entities/TechnologyForm/TechnologyForm.tsx";
import {Step} from "../../entities/Step/Step.tsx";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {changePosition, setStack} from "../../App/Redux/formsReducer.ts";

export const AddStack = () => {

    const dispatch = useDispatch()
    const dChangePosition = (add: number) => dispatch(changePosition(add))
    const dSetStack = (_data: string[]) => dispatch(setStack(_data))
    const [_stack, _setStack] = useState<string[]>([])

    return(
        <>
            <Step onClick={() => {
                dSetStack(_stack)
                dChangePosition(1)
            }} header={"Stack"}>
                <TechnologyForm stack={_stack} getData={(data: string[]) => _setStack(data)}/>
            </Step>
        </>
    )
}