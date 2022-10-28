import React from 'react'

const ThemeButton = ({ input, modclassName }) => {
    return (
        <button className={`btn-themed ${modclassName}`} >
            {input}
        </button >
    )
}

export default ThemeButton