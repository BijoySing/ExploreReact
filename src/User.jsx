import { useEffect, useState } from "react";

function User() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, []);

    return (
        <div>
            <h2>user:{users.length}</h2>
        </div>
    )
}

export default User;