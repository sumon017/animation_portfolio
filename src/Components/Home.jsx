import React from 'react'
import Common from './Common'
import home from './image/home.png'
export default function Home() {
    return (
        <div className="home">
            <Common  img={home} name="Welcome To The Home"/>
        </div>
    )
}
