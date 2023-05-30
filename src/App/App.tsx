import './App.css'
import PDFView from "../PdfConstructor/PDFView";
import { useForm } from "react-hook-form";
import {useState} from "react";
import {InputField} from "../shared/inputField/inputField";
import {Step} from "../entities/step/Step";
import {PDFViewContainer} from "../PdfConstructor/PDFViewContainer";
import {FillStepsContainer} from "../widgets/FillSteps/FillStepsContainer";


export type resumeDataType = {
    headerData: {name: string, lastName: string, vacancy: string},
    locationData: {city: string, country: string},
    contactData: {phone: string, email: string}
}

function App() {

    return (
        <div className={"mainPage"}>
                <div>
                    <FillStepsContainer/>

                </div>
            <PDFViewContainer/>
        </div>
    )
}

export default App
