export type IProjectData = {
    name: string,
    start_date: string,
    finish_date: string,
    caption: string,
    links: linkType[],
    stack: string[]
}

export type linkType = {name: string, href: string}