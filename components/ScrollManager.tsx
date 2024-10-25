import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";

interface scrollMangerProps  {
    section: number
    onSectionChange: Dispatch<SetStateAction<number>>
}
export const ScrollManager = (props: scrollMangerProps) => {
    const {section, onSectionChange} = props;

    const data = useScroll()
    const lastScrollPos = useRef(0);
    const isAnimating = useRef(false);

    useFrame(() => {
        if (isAnimating.current) {
            lastScrollPos.current = data.scroll?.current;
            return;
        }
        const currentSection = Math.floor(data.scroll.current * data.pages);
        if (data.scroll.curent > lastScrollPos.current && currentSection === 0) {
            onSectionChange(1);
        }
        if (data.scroll.current < lastScrollPos.current && data.scroll.current < 1 / (data.pages - 1)) {
            onSectionChange(0)
        }
    })
    return null
}