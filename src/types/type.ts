// npx json-server --watch db.json --port 3004

import { ReactNode } from "react"

export type navbaritemprops = {
    href:string
    txt:string
}
export type buttonprops = {
    txt:string
    onclick:()=> any
    textSize:any
}
export type navbarprops = {
    children:any
}
export type getdataprops = {
    setLoading:(loading: boolean) => void;
    setError:(error: boolean) => void;
    url:string
}
export type productType = {
    discount:boolean
    id:string
    img:string
    img2:string 
    name:string
    price:string
    stock:string
    title:string
}

export type productResponse = {
    [key:string]:productType[]
}
export type carouselprops = {
    Component:React.ComponentType<{ item: productType,specialData?:any }>
    data:productType[]
    newResponsive:object
    specialData?:any
}
export type titelprops = {
    txt:string
    href:string
    txtlink:string
}
export type Categoriesprops  = {
    item:productType
    specialData?:any
}
export type inputprops = {
    txt:string
    placeholder:string
}
