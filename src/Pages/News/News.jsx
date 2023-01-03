import { Link, NavLink, Route, Routes } from "react-router-dom"
export const News = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"jahon"}>jahon_yangiliklari</Link>
                    </li>
                    <li>
                        <Link to={"uzb"}>uzb_yangiliklari</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/jahon" element={<h3>Jahon yangiliklari</h3>}></Route>
                <Route index path="/uzb" element={<h3>Uzb yangiliklari</h3>}></Route>
                <Route index element={<h3>Uzb yangiliklari</h3>}></Route>
            </Routes>
        </div>
    )
}