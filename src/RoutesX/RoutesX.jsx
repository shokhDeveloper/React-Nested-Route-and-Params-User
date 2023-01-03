import { useRoutes } from "react-router"
import { Home, News, Weather } from "../Pages"

export const RoutesX = () => {
    const route = [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/news/*",
            element: <News/>
        },
        {
            path: "/weather/*",
            element: <Weather/>
        }
    ]
    return useRoutes(route)
}