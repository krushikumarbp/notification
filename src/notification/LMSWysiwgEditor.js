import React, { Component } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { EditorState, convertToRaw, Modifier, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const options = [
  { value: "relatedusername", label: "Related User Name" },
  { value: "recipientname", label: "Recipient Name" },
  { value: "trainingname", label: "Training Name" },
  { value: "elearninglink", label: "eLearning Link" },
  { value: "supervisorname", label: "Supervisor Name" },
  { value: "companyname", label: "Company Name" },
];

class DynamicField extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };

  dropDown = (option) => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      option.label,
      editorState.getCurrentInlineStyle()
    );
    onChange(EditorState.push(editorState, contentState, "insert-characters"));
  };

  render() {
    return (
      <Select
        options={options}
        onChange={this.dropDown}
        menuPortalTarget={document.body}
      />
    );
  }
}
class LMSWysiwgEditor extends Component {
  constructor(props) {
    super(props);
    const html = "<p>Test<p>   <br>dfg</br>";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        htmlData: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        rawHtmlData: "",
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      htmlData: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  convertHtmlToDraft = () => {
    const contentBlock = htmlToDraft(this.state.rawHtmlData);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const updatedEditorState = EditorState.createWithContent(contentState);
    this.setState({
      editorState: updatedEditorState,
      htmlData: draftToHtml(
        convertToRaw(updatedEditorState.getCurrentContent())
      ),
    });
  };
  updateHtmlData = (e) => {
    console.log(e.target.value);
    this.setState({
      rawHtmlData: e.target.value,
    });
  };
  convertDraftToHtml = () => {
    this.setState({
      rawHtmlData: draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      ),
    });
  };

  render() {
    const { editorState, htmlData, rawHtmlData } = this.state;
    console.log(editorState, typeof htmlData);
    return (
      <div>
        <div id="Editor">
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            toolbarCustomButtons={[<DynamicField />]}
          />
        </div>
        <textarea
          id="HtmlSection"
          className="text-area"
          value={rawHtmlData}
          onChange={this.updateHtmlData}
        />
        {/* <p>{htmlData}</p> */}
        <button onClick={this.convertHtmlToDraft}>ConvertToDraft</button>
        <button onClick={this.convertDraftToHtml}>ConvertToHtml</button>
      </div>
    );
  }
}
export default LMSWysiwgEditor;
