export enum levels {
    ELEMENTARY = "Elementary",
    PREINTERMEDIATE = "Pre intermediate",
    INTERMEDIATE = "Intermediate",
    UPPERMEDIATE = "Upper intermediate",
    ADVANCED ="Advanced",
    PROFICIENT = "Proficient",
    NATIVE = "Native"
}

export type languageType = { lang: string, level: string }

export interface IAddLanguageProps {
    languages: languageType[]
    getData?(data: languageType[]): void
}