import './user.scss'

const User = ({ user }) => {
    return (
        <div className='user-wrapper'>
            <span>
                {`name: ${user.name}`}
            </span>
            <span>
                {`phone: ${user.phone}`}
            </span>
            <span>
                {`email: ${user.email}`}
            </span>
        </div>
    )
}

export default User