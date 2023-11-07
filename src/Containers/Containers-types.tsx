import { ReactNode } from "react";

export interface ContainersTypes {
    direction?: string;
    align?: string;
    justify?: string;
    wrap?: string;
    children?: ReactNode;
    width?: number;
    maxWidth?: number;
    margin?: number;
    padding?: string;
    flex?: string;
    position?: string;
    response?:boolean;
    footerResponse?:boolean;
}