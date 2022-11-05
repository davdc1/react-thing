import { useSetRecoilState } from 'recoil'
import { popupName } from '../../../state/popup'
import './home.scss'

const Home = () => {

    const setPopupName = useSetRecoilState(popupName)
   

    const handler = (e) => {
        setPopupName(e.target.value)
    }



    return(
        <div className='home-wrapper'>
            <h4>this is home</h4>

            <input className='popup-input' onChange={handler}/>
        </div>
    )
}

export default Home