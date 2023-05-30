import {Canvas, Document, Font, Link, Page, PDFViewer, StyleSheet, Text, View} from "@react-pdf/renderer";
import {linkType} from "../features/addLinks/AddLinks";

export type PDFDocumentProps = {
    first_name: string,
    last_name: string,
    vacancy: string,
    city: string,
    country: string,
    phone: string,
    email: string,
    links: linkType[]
}

function PDFView(props: {forms: PDFDocumentProps}) {

    const styles = StyleSheet.create({
        page: {
            padding: '25pt 45pt'
        },
        viewer: {
            margin: 0,
            width: window.innerWidth / 3,
            height: '100%',
        },
        header: {
        },
        blockName: {
            fontFamily: "Helvetica-Bold",
            fontSize: "16pt",
            marginBottom: "5pt",
            textTransform: 'uppercase',
            marginTop: "15pt"
        },
        sectionName: {
            fontFamily: "Helvetica-Bold",
            fontSize: "10pt",
            marginBottom: "8pt",
            paddingTop: "20pt",
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
            gap: "15pt"
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
            paddingTop: "15pt",
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

    const links = props.forms.links.map((element, index) => <Link key={"user_link_" + index} style={styles.link} src={element.href}>{element.name}</Link>)

    function lineGenerator(xLength: number, yLength: number, depth: number, opacity: number){

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
        <div>
            <PDFViewer showToolbar={true} style={styles.viewer}>
                <Document>
                    <Page size="A4" style={styles.page}>

                        <View style={styles.header}>
                            <Text style={styles.name}>{props.forms.first_name}</Text>
                            <Text style={styles.name}>{props.forms.last_name}</Text>
                            <Text style={styles.vacancy}>{props.forms.vacancy}</Text>
                        </View>
                        <Canvas style={styles.line} paint={lineGenerator(500, 0, 1, 0.1)}/>

                        <View style={styles.main}>

                            <View style={styles.leftSection}>

                                <View>
                                    <Text style={styles.blockName}>Details</Text>
                                    <Canvas paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                    <View>
                                        <Text style={styles.sectionName}>address</Text>
                                        <Text style={styles.data}>{props.forms.city}</Text>
                                        <Text style={styles.data}>{props.forms.country}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.sectionName}>phone</Text>
                                        <Text style={styles.data}>{props.forms.phone}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.sectionName}>email</Text>
                                        <Text style={styles.data}>{props.forms.email}</Text>
                                    </View>

                                    <Text style={styles.blockName}>Links</Text>
                                    <Canvas paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                    <View>
                                        {links}
                                    </View>
                                </View>

                            </View>

                            <View style={styles.mainSection}>
                                <Text style={styles.blockName}>Projects</Text>
                                <Canvas paint={lineGenerator(25, 0, 2.5, 1.0)}/>

                                <View>
                                    <Text style={styles.sectionName}>Speed typing</Text>
                                    <Text style={styles.data}>Dec 2023 - Present</Text>
                                    <Text style={styles.caption}>A web application with quizzes that can have multiple-choice answers
                                        and an unlimited number of questions</Text>
                                    <Text style={styles.data}>Stack: React, Redux Toolkit, Axios, TypeScript</Text>
                                    <View style={styles.projectLinks}>
                                        <Link style={styles.link} src={"https://github.com/danyazero/ts-keyboard-trainer"}>GitHub</Link>
                                        <Link style={styles.link} src={"https://zerotest.netlify.app/"}>Deployed</Link>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

export default PDFView;