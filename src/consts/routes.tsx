import Board from "../components/board/Board";
import Draft from "../components/draft/Draft";
import Lobby from "../components/lobby/Lobby";
import LobbyPage from "../components/lobby/LobbyPage";
import Main from "../components/main/Main";
import { IRoute } from "./types";

const publicRoutes:IRoute[]=[
    {
        path:"/lobby",
        component:<Lobby/>
    },
    {
        path:"/board",
        component:<Board/>
    },
    {
        path:"/",
        component:<Main/>
    },
    {
        path:"/lobby/:id",
        component:<LobbyPage/>
    },
    {
        path:"/draft",
        component:<Draft/>
    },
]
export  { publicRoutes }