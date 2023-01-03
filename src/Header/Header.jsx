import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <header style={{width:"20%", height: "100vh", background: "grey", alignItems: "center", display: "flex"}}>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/news"}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/weather"}>Weather</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/chiqish"}>Chiqish</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user"}>User</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}