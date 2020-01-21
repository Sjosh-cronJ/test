import React from 'react'
import '../../Assets/Css/btn.css'
export default function button(props) {
    return (
        <div>
            <button className="btn" disabled={props.disabled} type="button" onClick={props.clicked}>Log in</button>
        </div>
    )
}
