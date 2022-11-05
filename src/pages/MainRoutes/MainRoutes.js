import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../MainRoutes/Home'
import LoginPage from '../MainRoutes/Login'
import Nav from '../../components/Nav'
import Users from '../Users'

const MainRoutes = () => {

    const linkArray = [
        { url: '/', text: 'Home' },
        { url: '/login', text: 'login' },
        { url: '/users', text: 'users' }
    ]


    return(
        <Router>
            <Nav linkArray={linkArray}/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/login' element={<LoginPage />}/>
            </Routes>
        </Router>
    )
}

export default MainRoutes