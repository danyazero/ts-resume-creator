import './App.css'
import React from "react";
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
