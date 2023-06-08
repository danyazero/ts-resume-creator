import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ILanguage, PDFDocumentProps, projectsType} from "../../PdfConstructor/PDFView";
import {linkType} from "../../entities/LinksForm/LinksForm.tsx";
import {levels} from "../../entities/LanguageForm/LanguageForm.tsx";
import {educationDataType} from "../../features/AddEducation/AddEducation.tsx";

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
    accept?: string,
    placeholder: string,
    required: boolean
}

const initialState: formsSliceState = {
    position: 0,
    forms: [
        {
            header: "Header Info", inputs: [
                {name: "photo", type: "file", accept: "image/jpeg, image/jpg, image/png, image/gif", placeholder: "Choose your photo", required: false},
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
                {name: "phone", type: "tel", placeholder: "Enter phone", required: true},
                {name: "email", type: "email", placeholder: "Enter email", required: true},
            ]
        },
        {
            header: "Projects", inputs: [
                {name: "name", type: "text", placeholder: "Enter name", required: true},
                {name: "start_date", type: "month", placeholder: "Enter start date", required: true},
                {name: "finish_date", type: "month", placeholder: "Enter finish date", required: true},
                {name: "caption", type: "text", placeholder: "Enter caption", required: false},
            ]
        },
        {
            header: "Education", inputs: [
                {name: "name", type: "text", placeholder: "Enter education name", required: true},
                {name: "start_date", type: "month", placeholder: "Enter start date", required: true},
                {name: "finish_date", type: "month", placeholder: "Enter finish date", required: true},
                {name: "city", type: "text", placeholder: "Enter city", required: true},
                {name: "caption", type: "text", placeholder: "Enter specialty", required: false},
            ]
        }
    ],
    resumeData: {
        first_name: "",
        last_name: "",
        photo: [],
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
            setResumeData(state: formsSliceState,
                          actions: PayloadAction<
                              { first_name: string, last_name: string, vacancy: string, photo: string }
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
            },
            setLanguages(state: formsSliceState,
                         actions: PayloadAction<ILanguage[]>){
                state.resumeData.langs = actions.payload

                return state;
            },
            setStack(state: formsSliceState,
                     actions: PayloadAction<string[]>){
                state.resumeData.stack = actions.payload

                return state;
            },
            setEducation(state: formsSliceState, actions: PayloadAction<educationDataType[]>){
                state.resumeData.education = actions.payload

                return state;
            }
        }
    }
)

export const {setResumeData, setLanguages, setEducation, setStack, changePosition, setProjectData, setLinks} = formsReducer.actions