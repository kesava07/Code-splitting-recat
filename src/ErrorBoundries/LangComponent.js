import React from 'react'

export default function LangComponent(props) {
    if (props.language === "Maths") {
        throw new Error("Maths is not a language")
    }
    return (
        <div>
            <h1>{props.language}</h1>
        </div>
    )
}
