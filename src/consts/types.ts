export interface IRoute{
    path:string
    component:JSX.Element
}
export interface IUser{
    id:number
    name:string
    email:string
    ready:boolean
}
export interface ILobby{
    id:number
    name:string
    users:IUser[]
    limit:number
}
export interface PostLobby{
    id:number
    name:string
}
export interface PostReg{
    name:string
    email:string
    password:string
}
export interface PostLog{
    email:string
    password:string
}
export interface DraftCard{
    name:string
    race:string
    image:File
}