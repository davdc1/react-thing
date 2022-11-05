import User from './User'
import './user-list.scss'

const UserList = ({ users }) => {
    return (
        <div className="user-list-wrapper">
            {users.map((user) => <User key={user.id.toString()} user={user}/>)}
        </div>
    )
}

export default UserList