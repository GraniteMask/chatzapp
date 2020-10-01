import React, {useState, useEffect} from 'react'
import queryString from 'query-string' //this helps us to get info from the URl
import io from 'socket.io-client'
import './Chat.css'
import InfoBar from '../InfoBar/Infobar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer'

let socket

const Chat =({location})=>{
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('') //for single msg
    const [messages, setMessages] = useState([])  //for list of msgs
    const [users, setUsers] = useState('');
    const ENDPOINT = 'localhost:5000'

    useEffect(()=>{
        const {name, room} =queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        socket.emit('join', {name, room}, ()=>{
            
        })
        
        
        return()=>{
            socket.emit('disconnect')
            socket.off()
        }

    }, [ENDPOINT, location.search])

    useEffect(()=>{  //this is for handling messages
        socket.on('message', (message)=>{
            setMessages([...messages, message])
        })
        socket.on("roomData", ({ users }) => {
            setUsers(users);
          });
    }, [messages])   //run only when messages array changes

    //function for sending msgs

    const sendMessage = (event) =>{
        event.preventDefault()

        if(message){
            socket.emit('sendMessage', message, ()=>setMessage(''))
        }
    }

   

    return (
      
        
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                
            </div>

            <div className="emoji" style={{padding: "10px"}}>
                <div style={{fontWeight:"bold"}}>Emoji list:-</div>
                <p className="emojiDetail">Happy face= :) | Big Grin= :D | Tongue=:P | Cool=B-)</p> 
                <p className="emojiDetail">Sad face= :( | Confused= :-/ | Kiss=:-* | Angel= O:-)</p> 
                <p className="emojiDetail" style={{paddingBottom:"10px"}}>Winking= ;) | Astonished= :X | Surprise=:-O | Cry= :'(</p>
            </div>
            <TextContainer users={users}/>
        </div>
       
    )
}

export default Chat
