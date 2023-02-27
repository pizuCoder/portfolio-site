import { useState } from 'react'
import './ToggleBtn.css'

const ToggleBtn = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
    )
}

export default ToggleBtn