import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

const Join =()=>{
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        
        <div className="joinOuterContainer">
            <h1 className="mobile ">ChatzApp <span role="img" aria-label="emoji">💬</span></h1>
            <h1 className=" mobileJoin">ChatzApp <span role="img" aria-label="emoji">💬</span></h1>
            <h2 className="joinh2a">Quick Use and Throw Chat Application</h2>
            <h5 className="joinh2b">Made with <span role="img" aria-label="emoji">❤️</span> By Ratnadeep DC</h5>
            <div className="joinInnerContainer">
                <h1 className="heading">Join your Room</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)}/></div>
                <div><input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event)=>setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room)? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
            <h5 className="experience">Use Web Browser and Desktop Mode to experience more features</h5>
        </div>
        
    )
}

 
export default Join
