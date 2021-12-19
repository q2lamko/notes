import {EditorState, RichUtils} from 'draft-js';
import * as React from 'react';
import {BlockType} from "./config";

export type EditorApi = {
    state: EditorState;
    onChange: (state: EditorState) => void;
    toggleBlockType: (blockType: BlockType) => void;
    currentBlockType: BlockType;
}

export const useEditor = (html?: string): EditorApi => {
    const [state, setState] = React.useState(() => EditorState.createEmpty());
    const toggleBlockType = React.useCallback((blockType: BlockType) => {
        setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
    }, []);
    const currentBlockType = React.useMemo(() => {
        const selection = state.getSelection();
        const content = state.getCurrentContent();
        const block = content.getBlockForKey(selection.getStartKey());
        return block.getType() as BlockType;
    }, [state]);
    return React.useMemo(() => ({
        state,
        onChange: setState,
        toggleBlockType,
        currentBlockType
    }), [state])
}