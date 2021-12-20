import * as React from 'react';
import { Editor } from 'draft-js';
import { useEditorApi } from './context';
import cn from 'classnames';
import './TextEditor.module.css';
import { BLOCK_RENDER_MAP } from './config';

export type TextEditorProps = {
    className?: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ className }) => {
    const { state, onChange } = useEditorApi();

    return (
        <div className={cn("text-editor", className)}>
            <Editor
                placeholder="Введите ваш текст"
                editorState={state}
                onChange={onChange}
                blockRenderMap={BLOCK_RENDER_MAP}
            />
        </div>
    );
}

export default TextEditor;