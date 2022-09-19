import React, { Component } from 'react';
import Select from "react-select";
import PropTypes from 'prop-types';
import { EditorState, convertToRaw, Modifier,ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const options = [
    { value: "Select Options", label: "Select Options" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  class CustomOption extends Component {
    static propTypes = {
      onChange: PropTypes.func,
      editorState: PropTypes.object,
    };
  
    addStar = (option:any) => {
      const { editorState, onChange }:any = this.props;
      const contentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        option.label,
        editorState.getCurrentInlineStyle(),
      );
      onChange(EditorState.push(editorState, contentState, 'insert-characters'));
    };
  
    render() {
      return (
        <Select options={options} onChange={this.addStar} menuPortalTarget={document.body}/>
      );
    }
  }
  
  // const LMSWysiwgEditor = () => {
  //   const [editorState, setEditorState] = useState<any>()
  //   const onEditorStateChange = (editorState:any) => {
  //     console.log(editorState);
  //     setEditorState(editorState)
  //   };
  //   return(
  //     <>
  //       <Editor
  //         wrapperClassName="demo-wrapper"
  //         editorClassName="demo-editor"
  //         editorState={editorState}
  //         toolbarCustomButtons={[<CustomOption />]}
  //         onEditorStateChange={onEditorStateChange}
  //       />
  //       <textarea
  //           disabled
  //           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
  //         />
  //     </>
  //   );
  // }
  // export default LMSWysiwgEditor;
  class LMSWysiwgEditor extends Component {
    constructor(props) {
      super(props);
      const html = '<p>Test<p>   <br>dfg</br>';
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);        
        this.state = {
          editorState,
          htmlData:draftToHtml(convertToRaw(editorState.getCurrentContent()))
        };
      }
    }
  
    onEditorStateChange: Function = (editorState:any) :void =>  {
      this.setState({
        editorState,
        htmlData:draftToHtml(convertToRaw(editorState.getCurrentContent())),
      });
    };
    convertHtmlToDraft: Function = (): void =>{
      const contentBlock = htmlToDraft(this.state.htmlData);      
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const updatedEditorState = EditorState.createWithContent(contentState); 
      this.setState({
        editorState:updatedEditorState,
        htmlData:draftToHtml(convertToRaw(updatedEditorState.getCurrentContent()))
      });
    }
    updateHtmlData: Function = (e): void => {
      const contentBlock = htmlToDraft(e.target.value);      
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const updatedEditorState = EditorState.createWithContent(contentState); 
      this.setState({
        // editorState:updatedEditorState,
        htmlData:draftToHtml(convertToRaw(updatedEditorState.getCurrentContent()))
      });
    }
  
    render() {
      const { editorState, htmlData } = this.state;
      console.log(editorState, typeof htmlData);
      return (
        <div>
          <div>
            <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            toolbarCustomButtons={[<CustomOption />]}
          />
          <textarea
            className='text-area'
            value={htmlData}
            onChange={this.updateHtmlData}
          />
          <button onClick={this.convertHtmlToDraft}>ConvertToDraft</button>
          </div>
        </div>
      );
    }
  }
  export default LMSWysiwgEditor;