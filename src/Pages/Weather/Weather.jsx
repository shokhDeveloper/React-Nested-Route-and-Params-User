import { Link, NavLink, Route, Routes } from "react-router-dom"

export const Weather = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"samarqand"}>samarqand_yangiliklari</Link>

                    </li>
                    <li>
                        <Link to={"buxoro"}>buxoro_yangiliklari</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route  index element={<h3>Samarqand</h3>}></Route>
                <Route path="/samarqand" element={<h3>Samarqand</h3>}></Route>
                <Route path="/buxoro" element={<h3>Buxoro</h3>}></Route>
            </Routes>
        </div>
    )
}