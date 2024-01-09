import React, {FC} from 'react';
import {CodeBlock, dracula} from "react-code-blocks";
import {CodeComponentPropsTypes} from "../types/CodeComponentTypes";

export const UseCopyToClipboard: FC<CodeComponentPropsTypes> = ({text, language, startingLineNumber, showLineNumbers})=> {
    return (
        <div>
            <CodeBlock
                text={text}
                language={language}
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                theme={dracula}
            />
        </div>
    );
};

export default UseCopyToClipboard;