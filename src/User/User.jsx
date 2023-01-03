import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect, useState } from "react"
import { PostsAction } from "../store/Reducers/Reducer"
import { Link } from "react-router-dom"
export const User = () => {
    const [data, setData] = useState([])
    const posts = useSelector((state) => state.PostsReducers)
    const dispatch = useDispatch()
    async function handleClick(){
        let jsons = await axios({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/users    `
        }).catch((error) => {
            if(error.name === "AxiosError"){
                setData({error: error.name, message: error.message})
            }
        })
        let response = await jsons.data
        setData(response)
    }
    useEffect(() => {
        if(data.length > 0){
            dispatch(PostsAction.setPosts(data))
        }
    },[data])
    return(
        <div>
            <button onClick={handleClick}>Olib kelish</button>
            {console.log(posts)}
            {posts.post !== undefined?
                <div style={{display: "flex", flexDirection:"column"}}>
                    {posts.post.map((user, index) => (
                       <Link to={`/user/${user.id}`} key={user.id}>User = {index+1} </Link>
                    ))} 
                </div>
            :false}
        </div>
    )
}