import React, { useState } from 'react'
import "./ChatScreen.css"
import {Avatar} from "@material-ui/core"


function ChatScreen() {
    const[input, setInput]=useState('');
    const[messages, setMessages]= useState([
        {
        name: "Ellen"            ,
        image: "https://media1.popsugar-assets.com/files/thumbor/eksYxaMMRfj92j_1FckIzvKBn98/426x255:1785x1614/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/06/010/n/1922398/a0fa06245e13bf79661e80.88411626_/i/Ellen-DeGeneres.jpg",
        message:"Whats up",
        },
        {
        name: "Ellen",
        image:"https://media1.popsugar-assets.com/files/thumbor/eksYxaMMRfj92j_1FckIzvKBn98/426x255:1785x1614/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/06/010/n/1922398/a0fa06245e13bf79661e80.88411626_/i/Ellen-DeGeneres.jpg",
        message: "Hows it going",
        },
        {
            message: "Hi! How are you Ellen",
        }
    ]);
        const handleSend=(e)=>{
            e.preventDefault();
            setMessages([...messages,{message: input}]);
            setInput('')
        }
    return (
        <div className="chatScreen">
          <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/2020</p>

          {messages.map((message)=>
              message.name?(
                <div className="chatScreen__message">
                <Avatar className="chatScreen__image"
                alt={message.name}
                src={message.image}/>

                <p className="chatScreen__text">{message.message}</p>
            </div>
              ):(
                <div className="chatScreen__message">
                <p className="chatScreen__textUser">{message.message}</p>
                </div>
              )
          )}
          
              <form className="chatScreen__input">
                  <input value={input} onChange={e=>setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message.." type="text"/>
                  <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
              </form>
          </div>
        
    )
  }

export default ChatScreen
