import {Link, Outlet} from "react-router-dom"
export const Chiqish = () => {
    return(
        <div>
            <h1>Chiqish</h1>
            <Link to={"tizim"}>Tizimdan chiqish</Link>
            <Link to={"akk"}>Akk</Link>
            <Outlet/>
        </div>
    )
}