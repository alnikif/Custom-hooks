import { CodeBlock, dracula } from "react-code-blocks";
import {FC} from "react";
import {CodeComponentPropsTypes} from "../types/CodeComponentTypes";



export const  UseIsFirstRender: FC<CodeComponentPropsTypes> = ({ text, language, showLineNumbers, startingLineNumber }) =>  {
    return (
        <CodeBlock
            text={text}
            language={language}
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
            theme={dracula}
        />
    );
}