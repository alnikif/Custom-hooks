export const textUseIsFirstRender = "import React, {useEffect, useRef} from 'react';\n" +
    "\n" +
    "export const useIsFirstRender = () => {\n" +
    "    const isFirstRender = useRef(true);\n" +
    "\n" +
    "    if(isFirstRender.current){\n" +
    "        isFirstRender.current = false;\n" +
    "        return true\n" +
    "    }\n" +
    "\n" +
    "    return isFirstRender.current;\n" +
    "};";

export const textIsMountedComponent = "import {useEffect, useRef} from 'react';\n" +
    "\n" +
    "export const useIsMounted = () => {\n" +
    "    const isMounted = useRef(false);\n" +
    "\n" +
    "    useEffect(() => {\n" +
    "        isMounted.current = true;\n" +
    "    })\n" +
    "\n" +
    "    return isMounted.current;\n" +
    "};"

export const textUseContainerSize = "import React, {useCallback, useEffect, useState} from 'react';\n" +
    "\n" +
    "export const useContainerSize = () => {\n" +
    "    const [ ref, setRef ] = useState<HTMLDivElement | null>(null)\n" +
    "    const [containerSize, setContainerSize] = useState({width: 0, height: 0});\n" +
    "\n" +
    "    const handleResize = useCallback(() => {\n" +
    "        if(!ref) return\n" +
    "        const {offsetWidth, offsetHeight} = ref;\n" +
    "        setContainerSize({width: offsetWidth, height: offsetHeight});\n" +
    "    },[ref?.offsetWidth, ref?.offsetHeight])\n" +
    "\n" +
    "    useEffect(() => {\n" +
    "            window.addEventListener('resize', handleResize);\n" +
    "\n" +
    "            return () => {\n" +
    "                window.removeEventListener('resize', handleResize);\n" +
    "            }\n" +
    "    }, [ref]);\n" +
    "\n" +
    "    return {setRef, containerSize}\n" +
    "};"