import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PDFDocumentProps, projectsType} from "../../PdfConstructor/PDFView";
import {linkType} from "../../shared/addLinks/AddLinks";
import {projectDataType} from "../../features/AddProject/AddProject.tsx";

export type formsSliceState = {
    position: number,
    forms: stepType[],
    resumeData: PDFDocumentProps
}

export type stepType = {
    header: string,
    inputs: inputFieldType[]
}

export type inputFieldType = {
    name: string,
    type: string,
    placeholder: string,
    required: boolean
}

const initialState: formsSliceState = {
    position: 0,
    forms: [
        {
            header: "Header Info", inputs: [
                {name: "first_name", type: "text", placeholder: "Enter firstname", required: true},
                {name: "last_name", type: "text", placeholder: "Enter lastname", required: true},
                {name: "vacancy", type: "text", placeholder: "Enter vacancy", required: false}
            ]
        },
        {
            header: "Location Info", inputs: [
                {name: "city", type: "text", placeholder: "Enter city", required: true},
                {name: "country", type: "text", placeholder: "Enter country", required: true},
            ]
        },
        {
            header: "Contact Info", inputs: [
                {name: "phone", type: "text", placeholder: "Enter phone", required: true},
                {name: "email", type: "text", placeholder: "Enter email", required: true},
            ]
        },
        {
            header: "Projects", inputs: [
                {name: "name", type: "text", placeholder: "Enter name", required: true},
                {name: "start_date", type: "date", placeholder: "Enter start date", required: true},
                {name: "finish_date", type: "date", placeholder: "Enter finish date", required: true},
                {name: "caption", type: "text", placeholder: "Enter caption", required: false},
            ]
        }
    ],
    resumeData: {
        first_name: "",
        last_name: "",
        vacancy: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        links: [],
        projects: {
            header: "Projects",
            array: [
            ]
        }
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
            changePosition(state: formsSliceState, actions: PayloadAction<number>){
                state.position += actions.payload

                return state;
            },
            setProjectData(state: formsSliceState, actions: PayloadAction<projectsType>){
                state.resumeData.projects = actions.payload

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

export const {setResumeData, changePosition, setProjectData, setLinks} = formsReducer.actions