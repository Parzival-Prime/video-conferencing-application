import { ReactNode } from "react";

export interface MeetingModalProps {
    isOpen: boolean;
    onClose: ()=>void
    title: string,
    className?: string
    children?: ReactNode
    handleClick?: ()=>void 
    buttonText?: string
    image?: string
    buttonIcon?: string
}

export interface HomeCardProps {
    className: string,
    img: string,
    title: string,
    description: string,
    handleClick: () => void
}
