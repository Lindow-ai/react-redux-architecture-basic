import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyTv } from '../redux/tv/actionTv'

const TvContainer = () => {

    const [totalTv, setTotalTv] = useState(1)

    const televisions = useSelector(state => state.tv.tv)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <img src="image/tv.png" alt="tv" />
            <p> Disponibilité:
                <span id="count"> {televisions} </span>
            </p>
            <div className="btnContainer">
                <button onClick={() => dispatch(buyTv(totalTv))}>Acheter</button>
                <input type="text" value={totalTv} onChange={e => setTotalTv(e.target.value)} />
            </div>
        </div>
    )
}

export default TvContainer