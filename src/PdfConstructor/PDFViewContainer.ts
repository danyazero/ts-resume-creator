import PDFView, {PDFDocumentProps} from "./PDFView";
import {connect} from "react-redux";
import {RootState} from "../App/Redux/store";

function mapStateToProps(state: RootState): {forms: PDFDocumentProps} {
    return{
        forms: state.forms.resumeData
    }
}
export const PDFViewContainer = connect(mapStateToProps, null)(PDFView)