import { useRecoilState } from 'recoil'
import { popupName as popupNameState } from '../../state/popup'
import types from './types'
import './popup.scss'

const Popup = () => {
    const [popupName, setPopupName] = useRecoilState(popupNameState)

    const closePopup = () => {
        setPopupName(null)
    }

    return types[popupName] ? (
        <>
            <div onClick={closePopup} className="popup-blur-filter"></div>
            <div className={`popup-outer ${popupName}`}>
                <div className="popup">
                    {types[popupName]}
                </div>
            </div>
        </>
    ) : ''
}

export default Popup