import React from 'react';

const IsMountedComponent = () => {
    return (
        <div>
            {"import {useEffect, useRef} from \"react\";\n" +
                "\n" +
                "            export const useIsMounted = () => {\n" +
                "            const isMounted = useRef(false);\n" +
                "\n" +
                "            useEffect(() => {\n" +
                "            isMounted.current = true;\n" +
                "        })\n" +
                "\n" +
                "            return isMounted.current;\n" +
                "        }"}
        </div>
    );
};

export default IsMountedComponent;