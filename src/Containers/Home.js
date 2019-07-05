import React from 'react'
import LangComponent from '../ErrorBoundries/LangComponent';
import FallBack from '../ErrorBoundries/FallBack';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <FallBack>
                <LangComponent language="English" />
            </FallBack>
            <FallBack>
                <LangComponent language="Hindi" />
            </FallBack>
            <FallBack>
                <LangComponent language="Maths" />
            </FallBack>
        </div>
    )
}
