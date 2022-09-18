import React, { FC } from 'react';
import { CKEditor } from 'ckeditor4-react';
interface LMSCKEditorProps {

}
const LMSCKEditor: FC<LMSCKEditorProps> = ({}) =>{
    return (
        <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor initData="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
        </div>
    );
}

export default LMSCKEditor;