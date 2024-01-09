import { CodeBlock, dracula } from "react-code-blocks";
import {FC} from "react";

type useIsFirstRenderProps = {
    text: string,
    language: string,
    showLineNumbers: boolean,
    startingLineNumber: number,
}

export const  UseIsFirstRender: FC<useIsFirstRenderProps> = ({ text, language, showLineNumbers, startingLineNumber }) =>  {
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