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
    "};";

export const textUseHover = "import React, { useEffect, useState, useRef, useCallback } from 'react';\n" +
    "\n" +
    "const UseHover = () => {\n" +
    "    const [isHover, setIsHover] = useState(false);\n" +
    "    const ref = useRef<HTMLDivElement | null>(null);\n" +
    "\n" +
    "    const handleMouseOver = useCallback(() => {\n" +
    "        setIsHover(true);\n" +
    "    }, []);\n" +
    "\n" +
    "    const handleMouseLeave = useCallback(() => {\n" +
    "        setIsHover(false);\n" +
    "    }, []);\n" +
    "\n" +
    "    useEffect(() => {\n" +
    "        if (!ref.current) return;\n" +
    "\n" +
    "        const currentRef = ref.current;\n" +
    "\n" +
    "        currentRef.addEventListener('mouseover', handleMouseOver);\n" +
    "        currentRef.addEventListener('mouseleave', handleMouseLeave);\n" +
    "\n" +
    "        return () => {\n" +
    "            currentRef.removeEventListener('mouseover', handleMouseOver);\n" +
    "            currentRef.removeEventListener('mouseleave', handleMouseLeave);\n" +
    "        };\n" +
    "    }, [handleMouseOver, handleMouseLeave]);\n" +
    "\n" +
    "    return { ref, isHover };\n" +
    "};\n" +
    "\n" +
    "export default UseHover;";

export const textUseCopyToClipboard = "import { useState } from 'react';\n" +
    "\n" +
    "const useCopyToClipboard = (): [string, (text: string) => void] => {\n" +
    "    const [value, setValue] = useState('');\n" +
    "\n" +
    "    const copy = (text: string) => {\n" +
    "        navigator.clipboard.writeText(text)\n" +
    "            .then(() => {\n" +
    "                setValue(text);\n" +
    "            })\n" +
    "            .catch((error) => {\n" +
    "                console.error('Copy Error: ', error);\n" +
    "            });\n" +
    "    };\n" +
    "\n" +
    "    return [value, copy];\n" +
    "};\n" +
    "\n" +
    "export default useCopyToClipboard;"