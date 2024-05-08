import React, { useState, useEffect } from 'react';
import { EditorState, ContentState, convertToRaw, Modifier, SelectionState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';

const EditorWithState = ({ initialContent, onContentChange }) => {
    const [editorState, setEditorState] = useState(() => {
        const blocksFromHtml = htmlToDraft(initialContent || '');
        const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap);
        return EditorState.createWithContent(contentState);
    });

    useEffect(() => {
        if (initialContent) {
            const blocksFromHtml = htmlToDraft(initialContent);
            const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap);
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(EditorState.moveFocusToEnd(newEditorState));
        }
    }, [initialContent]);

    const handleEditorStateChange = (newEditorState) => {
        if (!newEditorState.getSelection().getHasFocus()) {
            const selectionState = newEditorState.getSelection();
            const updatedSelection = selectionState.merge({
                hasFocus: true
            });
            newEditorState = EditorState.forceSelection(newEditorState, updatedSelection);
        }
        setEditorState(newEditorState);
        const currentContent = newEditorState.getCurrentContent();
        onContentChange(draftToHtml(convertToRaw(currentContent)));
    };

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
        />
    );
};

export default EditorWithState;
