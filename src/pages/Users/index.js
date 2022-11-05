import { useEffect, useState } from 'react'
import UserList from '../../components/UserList/UserList'
import users from '../../services/users'
import './users.scss'

const Users = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        users.getAllUsers()
        .then((res) => {
            setList(res.data)
        })
    }, [])

    return (
        <div className='users-wrapper'>
            <UserList users={list}/>
        </div>
    )
}

export default Users