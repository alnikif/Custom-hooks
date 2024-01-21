import React, {FC} from 'react';
import {CodeBlock, dracula} from "react-code-blocks";

export enum LanguageEnum {
    javascript = 'javascript'
}

export type CodeBlockPrettierTypes = {
    text: string,
    language?: string,
    showLineNumbers?: boolean,
    startingLineNumber?: number,
}

const CodeBlockPrettier: FC<CodeBlockPrettierTypes> = (props) => {
    const {
        text,
        startingLineNumber = 1,
        showLineNumbers = true,
        language = LanguageEnum.javascript,
    } = props;

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

export default CodeBlockPrettier;