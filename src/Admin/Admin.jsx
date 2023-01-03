import { useEffect, useState } from "react"
import { useParams } from "react-router"
export const Admin = () => {
    const params = useParams()
    const [data, setData] = useState([])
    let result = []
    useEffect(() => {
        if(params.id){
            ;(function(){
                fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`) 
                .then((response) => response.json())
                .then((data) => {
                    result.push(data)
                    setData(result)
                })
            }())
        }
    },[params.id])    
    return(
        <div>
           {data.map((user) => (
            <h1 key={user.id}>User {params.id} =  {user.name}</h1>
           ))}
        </div>
    )
}