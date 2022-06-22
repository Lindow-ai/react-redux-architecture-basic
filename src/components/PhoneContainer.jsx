import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPhone } from '../redux/phone/actionPhone'

const PhoneContainer = () => {

    const [totalPhone, setTotalPhone] = useState(1)

    const phones = useSelector(state => state.phone.phones)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <img src="image/phone.png" alt="phone"/>
            <p>
                Disponibilité:
                <span id="count">{phones}</span>
            </p>
            <div className="btnContainer">
                <button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
                <input type="text" value={totalPhone} onChange={e => setTotalPhone(e.target.value)} />
            </div>
        </div>
    )
}

export default PhoneContainer