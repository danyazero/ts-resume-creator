import {Canvas, Document, Image, Link, Page, PDFViewer, StyleSheet, Text, View} from "@react-pdf/renderer";
import {linkType} from "../entities/LinksForm/LinksForm.tsx";
import {IProjectData} from "../features/AddProject/AddProject.tsx";
import {languageType} from "../entities/LanguageForm/LanguageForm.tsx";
import {IEducationData} from "../features/AddEducation/AddEducation.tsx";


export type PDFDocumentProps = {
    first_name: string,
    last_name: string,
    vacancy: string,
    city: string,
    country: string,
    phone: string,
    email: string,
    links: linkType[],
    langs: languageType[]
    stack: string[],
    projects: projectsType
    photo: any,
    education: educationDataType[]
}

export type projectsType = {
    header: string,
    array: projectDataType[]
}

function PDFView(props: { forms: PDFDocumentProps }) {

    const styles = StyleSheet.create({
        page: {
            padding: '25pt 45pt'
        },
        photo: {
            width: "77pt",
            height: "108pt",
            objectFit: "cover"
        },
        viewer: {
            margin: 0,
            width: window.innerWidth / 3 + 40,
            height: '100%',
        },
        stack: {
            paddingTop: "10pt",
            gap: "10pt"
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        blockName: {
            fontFamily: "Helvetica-Bold",
            fontSize: "16pt",
            marginBottom: "5pt",
            textTransform: 'uppercase',
            marginTop: "15pt",
        },
        sectionName: {
            fontFamily: "Helvetica-Bold",
            fontSize: "10pt",
            marginBottom: "8pt",
            paddingTop: "20pt",
            maxWidth: "70%",
            textTransform: 'uppercase',
        },
        data: {
            fontFamily: "Helvetica",
            fontSize: "10pt",
            opacity: 0.7,
            color: "#747474",
        },
        projectLinks: {
            flexDirection: "row",
            gap: "8pt"
        },
        caption: {
            marginTop: "10pt",
            marginBottom: "10pt",
            fontFamily: "Helvetica",
            fontSize: "10pt",
            opacity: 0.7,
            color: "#747474",
        },
        link: {
            fontFamily: "Helvetica",
            paddingTop: "10pt",
            fontSize: "10pt",
            opacity: 0.7,
        },
        line: {
            marginTop: '25pt',
        },
        name: {
            fontSize: '36pt',
            textTransform: 'uppercase',
        },
        vacancy: {
            color: '#5D5D5D',
            marginTop: '10pt',
            marginLeft: '2pt',
            fontWeight: "thin",
            fontSize: '11pt'
        },
        main: {
            // paddingTop: "25pt",
            flexDirection: 'row'
        },
        leftSection: {
            width: '35%',
        },
        mainSection: {
            width: '65%',
        },
        section: {
            flexGrow: 1
        }
    });

    function mapLinks(links: linkType[]) {
        return links.map((element, index) => <Link key={"resume_link_" + index} style={styles.link}
                                                   src={element.href}>{element.name}</Link>)
    }

    function mapStack(stack: string[]) {
        return stack.map((element, index) => <Text key={"stack_technology_" + index}
                                                   style={styles.data}> {element}</Text>)
    }

    const projects = props.forms.projects.array.map((element, index) => {
        return (
            <View key={"resume_project_" + index}>
                <Text style={styles.sectionName}>{element.name}</Text>
                <Text style={styles.data}>{element.start_date} - {element.finish_date}</Text>
                <Text style={styles.caption}>{element.caption}</Text>
                <Text style={styles.data}>Stack: {mapStack(element.stack)}</Text>
                <View style={styles.projectLinks}>
                    {mapLinks(element.links)}
                </View>
            </View>
        )
    })

    const educations = props.forms.education.map((element, index) => {
        return (
            <View key={"resume_education_" + index}>
                <View style={styles.header}>
                    <Text style={styles.sectionName}>{element.name}</Text>
                    <Text style={styles.data}>{element.city}</Text>
                </View>
                <Text style={styles.data}>{element.start_date} - {element.finish_date}</Text>
                <Text style={styles.caption}>{element.caption}</Text>
            </View>
        )
    })


    const links = props.forms.links.map((element, index) => <Link key={"user_link_" + index} style={styles.link}
                                                                  src={element.href}>{element.name}</Link>)
    const stack = props.forms.stack.map((element, index) => <Text key={"user_technology_" + index}
                                                                  style={styles.data}>{element}</Text>)
    const langs = props.forms.langs.map((element, index) => <Text key={"language_" + index}
                                                                  style={styles.data}>{element.lang} - {element.level}</Text>)

    function lineGenerator(xLength: number, yLength: number, depth: number, opacity: number) {

        return (painterObject) => {
            painterObject.save()
            painterObject.moveTo(0, 0)
            painterObject.lineTo(xLength, yLength)
            painterObject.lineWidth(depth)
            painterObject.strokeOpacity(opacity)
            painterObject.stroke()
        }
    }

    return (
        <div style={{position: "fixed", right: "5px", top: "5px", height: "100%"}}>
            <PDFViewer showToolbar={true} style={styles.viewer}>
                <Document>
                    <Page size="A4" style={styles.page}>

                        {props.forms.first_name.length > 0 && <View style={styles.header}>
                            <View>
                                <Text style={styles.name}>{props.forms.first_name}</Text>
                                <Text style={styles.name}>{props.forms.last_name}</Text>
                                <Text style={styles.vacancy}>{props.forms.vacancy}</Text>
                            </View>
                            <Image style={styles.photo} src={props.forms.photo}/>
                        </View>}
                        <Canvas style={{width: "100%", height: "2pt", marginTop: '25pt'}}
                                paint={lineGenerator(500, 0, 1, 0.1)}/>

                        <View style={styles.main}>

                            <View style={styles.leftSection}>

                                <View>
                                    <Text style={styles.blockName}>Details</Text>
                                    <Canvas style={{width: "25pt", height: '2pt'}}
                                            paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                    {props.forms.city.length > 0 && <View>
                                        <Text style={styles.sectionName}>address</Text>
                                        <Text style={styles.data}>{props.forms.city}</Text>
                                        <Text style={styles.data}>{props.forms.country}</Text>
                                    </View>}
                                    {props.forms.phone.length > 0 && <View>
                                        <Text style={styles.sectionName}>phone</Text>
                                        <Text style={styles.data}>{props.forms.phone}</Text>
                                    </View>}
                                    {props.forms.email.length > 0 && <View>
                                        <Text style={styles.sectionName}>email</Text>
                                        <Text style={styles.data}>{props.forms.email}</Text>
                                    </View>}

                                    {props.forms.links.length > 0 && <View>
                                        <Text style={styles.blockName}>Links</Text>
                                        <Canvas style={{width: "25pt", height: '2pt'}}
                                                paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                        <View>
                                            {links}
                                        </View>
                                    </View>}

                                    {props.forms.stack.length > 0 && <View>
                                        <Text style={styles.blockName}>Skills</Text>
                                        <Canvas style={{width: "25pt", height: '2pt'}}
                                                paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                        <View style={styles.stack}>
                                            {stack}
                                        </View>
                                    </View>}
                                </View>

                            </View>

                            <View style={styles.mainSection}>
                                {projects.length > 0 && <View>
                                    <Text style={styles.blockName}>{props.forms.projects.header.toUpperCase()}</Text>
                                    <Canvas style={{width: "25pt", height: '2pt'}}
                                            paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                    {projects}
                                </View>}

                                {educations.length > 0 && <View>
                                    <Text style={styles.blockName}>Education</Text>
                                    <Canvas style={{width: "25pt", height: '2pt'}}
                                            paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                    {educations}
                                </View>}

                                {langs.length > 0 && <View>
                                    <Text style={styles.blockName}>Languages</Text>
                                    <Canvas style={{width: "25pt", height: '2pt'}}
                                            paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                    <View style={styles.stack}>
                                        {langs}
                                    </View>
                                </View>}
                            </View>


                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

export default PDFView;