import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PDFDocumentProps, projectsType} from "../../PdfConstructor/PDFView";
import {IEducationData} from "../../features/AddEducation/AddEducationModel.ts";
import {languageType} from "../../entities/LanguageForm/LanguageFormModel.ts";
import {linkType} from "../../features/AddProject/AddProjectModel.ts";

export interface IFormsSliceState {
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
    accept?: string,
    label: string,
    placeholder: string,
    required: boolean
}

const initialState: IFormsSliceState = {
    position: 0,
    forms: [
        {
            header: "Header Info", inputs: [
                {name: "first_name", label: "First Name", type: "text", placeholder: "Enter firstname", required: true},
                {name: "last_name", label: "Last Name", type: "text", placeholder: "Enter lastname", required: true},
                {name: "vacancy", label: "Wanted Job Title", type: "text", placeholder: "Enter vacancy", required: false}
            ]
        },
        {
            header: "Location Info", inputs: [
                {name: "city", label: "City", type: "text", placeholder: "Enter city", required: true},
                {name: "country", label: "Country", type: "text", placeholder: "Enter country", required: true},
            ]
        },
        {
            header: "Contact Info", inputs: [
                {name: "phone", label: "Phone", type: "tel", placeholder: "Enter phone", required: true},
                {name: "email", label: "Email", type: "email", placeholder: "Enter email", required: true},
            ]
        },
        {
            header: "Projects", inputs: [
                {name: "name", label: "Activity name, job title", type: "text", placeholder: "Enter name", required: true},
                {name: "start_date", label: "Start Date", type: "month", placeholder: "Enter start date", required: true},
                {name: "finish_date", label: "End Date", type: "month", placeholder: "Enter finish date", required: true},
                {name: "caption", label: "Description", type: "text", placeholder: "Enter description", required: false},
            ]
        },
        {
            header: "Education", inputs: [
                {name: "name", label: "School & degree", type: "text", placeholder: "Enter school name & degree", required: true},
                {name: "start_date", label: "Start Date", type: "month", placeholder: "Enter start date", required: true},
                {name: "finish_date", label: "End Date", type: "month", placeholder: "Enter finish date", required: true},
                {name: "city", label: "City", type: "text", placeholder: "Enter city", required: true},
                {name: "caption", label: "Specialty", type: "text", placeholder: "Enter specialty", required: false},
            ]
        }
    ],
    resumeData: {
        first_name: "",
        last_name: "",
        photo: "",
        vacancy: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        stack: [],
        links: [],
        langs: [],
        education: [],
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
            setResumeData(state: IFormsSliceState,
                          actions: PayloadAction<
                              { first_name: string, last_name: string, vacancy: string}
                              | { city: string, country: string }
                              | { phone: string, email: string }>) {
                Object.assign(state.resumeData, actions.payload)

                return state;
            },
            setPhoto(state: IFormsSliceState, actions: PayloadAction<string>){
                state.resumeData.photo = actions.payload

                return state;
            },
            changePosition(state: IFormsSliceState, actions: PayloadAction<number>){
                state.position += actions.payload

                return state;
            },
            setProjectData(state: IFormsSliceState, actions: PayloadAction<projectsType>){
                state.resumeData.projects = actions.payload

                return state;
            },
            setLinks(state: IFormsSliceState,
                     actions: PayloadAction<linkType[]>){
                state.resumeData.links = actions.payload

                return state;
            },
            setLanguages(state: IFormsSliceState,
                         actions: PayloadAction<languageType[]>){
                state.resumeData.langs = actions.payload

                return state;
            },
            setStack(state: IFormsSliceState,
                     actions: PayloadAction<string[]>){
                state.resumeData.stack = actions.payload

                return state;
            },
            setEducation(state: IFormsSliceState, actions: PayloadAction<IEducationData[]>){
                state.resumeData.education = actions.payload

                return state;
            }
        }
    }
)

export const {setResumeData, setPhoto, setLanguages, setEducation, setStack, changePosition, setProjectData, setLinks} = formsReducer.actions