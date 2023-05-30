import {FC, useState} from "react";
import {dFillStepsPropsType, FillStepsPropsType} from "./FillStepsContainer";
import {AddProject} from "../../features/AddProject/AddProject.tsx";

export const FillSteps: FC<FillStepsPropsType & dFillStepsPropsType> = (props) => {
    
    const [step, setStep] = useState(0)
    function onSubmit(data: any){
        props.setMainData(data)
        setStep(prevState => prevState+1)
    }

    console.log(step)


    return (<>
        {/* {step <= 2 && <Step step={props.forms[step]} onSubmit={onSubmit}/>}
        {step == 3 && <AddLinksContainer/>} */}
        <AddProject/>
    </>)
}