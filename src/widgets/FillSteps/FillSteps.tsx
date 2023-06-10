import {FC} from "react";
import {dFillStepsPropsType, FillStepsPropsType} from "./FillStepsContainer";
import {AddProject} from "../../features/AddProject/AddProject.tsx";
import {Step} from "../../entities/Step/Step.tsx";
import {Form} from "../../entities/Form/Form.tsx";
import {AddEducation} from "../../features/AddEducation/AddEducation.tsx";
import {Dropdown} from "../../entities/Dropdown/Dropdown.tsx";
import {AddStack} from "../../features/AddStack/AddStack.tsx";
import {AddLinks} from "../../features/AddLinks/AddLinks.tsx";
import {AddLanguages} from "../../features/AddLanguages/AddLanguages.tsx";

export const FillSteps: FC<FillStepsPropsType & dFillStepsPropsType> = (props) => {

    function getData(data: any) {
        props.changePosition(1)
        if (data.hasOwnProperty("photo")) data.photo = URL.createObjectURL(data.photo[0])
        props.setMainData(data)
    }

    const forms = props.forms.filter((element, index) => index <= 2 && element).map((element, index) => <Dropdown
        header={element.header} key={"form_" + index} index={index}><Step
         header={element.header}><Form reset={false} step={element} button={"Save"}
                                                            getData={getData}/></Step></Dropdown>)
    return (
        <>
            {forms}


            <Dropdown header={"Links"} index={3}>
                <AddLinks/>
            </Dropdown>

            <Dropdown header={"Languages"} index={4}>
                <AddLanguages/>
            </Dropdown>

            <Dropdown header={"Stack"} index={5}>
                <AddStack/>
            </Dropdown>

            <Dropdown header={"Projects(Experience)"} index={6}>
                <AddProject/>
            </Dropdown>

            <Dropdown header={"Education"} index={7}>
                <AddEducation/>
            </Dropdown>

        </>
    )
}