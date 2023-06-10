import {TechnologyForm} from "../../entities/TechnologyForm/TechnologyForm.tsx";
import {Step} from "../../entities/Step/Step.tsx";
import {useState} from "react";
import {useAddStack} from "./hooks/useAddStack.ts";

export const AddStack = () => {

    const {dSetStack, dChangePosition} = useAddStack()
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