import { useState } from 'react';

interface ButtonProps {
    label: string,
    important?: boolean
}
const Button = ({ label, important }: ButtonProps) => {
    const [color, setColor] = useState<boolean>(false)
    const handleClick = () => {
        setColor((prev: boolean) => !prev)
    }
    return (
        <button
            style={{ backgroundColor: color ? 'green' : 'red' }}
            onClick={handleClick}
        >
            {label} - {important ? 'Importante!!!' : 'Nothing'}
        </button>
    )
}

export default Button;