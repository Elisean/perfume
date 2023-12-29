import { ReactNode } from "react";

export interface ContainersTypes {
    direction?: string;
    align?: string;
    justify?: string;
    wrap?: string;
    children?: ReactNode;
    width?: number;
    maxWidth?: string;
    margin?: string;
    padding?: string;
    flex?: string;
    position?: string;
    response?:boolean;
    footerResponse?:boolean;
    catalogResponse?:boolean;
    filtersResponse?:boolean;
    cardResponse?:boolean;
    btnsCardResponse?:boolean;
    ref?:any;
    onClick?:any;
}