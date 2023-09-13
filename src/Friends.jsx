import { useEffect, useState } from "react";
import OnlyUser from "./OnlyUser";


function Friends(){
    const [friends, setfriends] = useState([]);
console.log(friends);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
        // .then(data => setUsers)
    }, [])

    return (

        <div className="box">
            <h1>Frineds:{friends.length}</h1>
            {
                friends.map(friend => (<OnlyUser friend={friend}></OnlyUser>))
            }
           

        </div>
    
    )
}


export default Friends;