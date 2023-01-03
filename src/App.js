import { Route, Routes } from "react-router";
import { Chiqish } from "./Chiqish";
import { News } from "./Pages";
import { Parent } from "./Parent";
import { RoutesX } from "./RoutesX";
import { User } from "./User";
import { Admin } from "./Admin";
function App() {
  return (
    <div className="App" style={{display: "flex"}}>
      <Parent/>
      <RoutesX/>
      <Routes>
        <Route path="/chiqish/*" element={<Chiqish/>}>
            <Route path="akk" element={<h3>Akk dan chiqish</h3>}></Route>
            <Route path="tizim" element={<h3>Tizimdan chiqish</h3>}></Route>
        </Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/user/:id" element={<Admin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
