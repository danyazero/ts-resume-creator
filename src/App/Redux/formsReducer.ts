import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PDFDocumentProps} from "../../PdfConstructor/PDFView";
import {linkType} from "../../features/addLinks/AddLinks";

export type formsSliceState = {
    forms: stepType[],
    resumeData: PDFDocumentProps
}

export type stepType = {
    header: string,
    inputs: inputFieldType[]
}

export type inputFieldType = {
    name: string,
    placeholder: string,
    required: boolean
}

const initialState: formsSliceState = {
    forms: [
        {
            header: "Header Info", inputs: [
                {name: "first_name", placeholder: "Enter firstname", required: true},
                {name: "last_name", placeholder: "Enter lastname", required: true},
                {name: "vacancy", placeholder: "Enter vacancy", required: false}
            ]
        },
        {
            header: "Location Info", inputs: [
                {name: "city", placeholder: "Enter city", required: true},
                {name: "country", placeholder: "Enter country", required: true},
            ]
        },
        {
            header: "Contact Info", inputs: [
                {name: "phone", placeholder: "Enter phone", required: true},
                {name: "email", placeholder: "Enter email", required: true},
            ]
        },
        // {
        //     header: "Projects", inputs: [
        //         {name: "project_name", placeholder: "Enter name", required: true},
        //         {name: "start_date", placeholder: "Enter start date", required: true},
        //         {name: "finish_date", placeholder: "Enter finish date", required: true},
        //         {name: "caption", placeholder: "Enter caption", required: false},
        //         {name: ""}
        //     ]
        // }
    ],
    resumeData: {
        first_name: "",
        last_name: "",
        vacancy: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        links: []
    }
}

export const formsReducer = createSlice({
        name: "formsReducer",
        initialState,
        reducers: {
            setResumeData(state: formsSliceState,
                          actions: PayloadAction<
                              { first_name: string, last_name: string, vacancy: string }
                              | { city: string, country: string }
                              | { phone: string, email: string }>) {

                Object.assign(state.resumeData, actions.payload)

                return state;
            },
            setLinks(state: formsSliceState,
                     actions: PayloadAction<linkType[]>){
                state.resumeData.links = actions.payload

                return state;
            }
        }
    }
)

export const {setResumeData, setLinks} = formsReducer.actions