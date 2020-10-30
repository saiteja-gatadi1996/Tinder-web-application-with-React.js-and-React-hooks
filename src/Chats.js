import React from 'react'
import Chat from './Chat'
import "./Chats.css"

function Chats() {
    return (
        <div className="chats">
           <Chat 
           name="Sarah"
           message="Hey!! how are you?"
           timestamp="35 mins ago"
           profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"/>

           <Chat 
           name="Ellen"
           message="Hey!! "
           timestamp="5 mins ago"
           profilePic="https://media1.popsugar-assets.com/files/thumbor/eksYxaMMRfj92j_1FckIzvKBn98/426x255:1785x1614/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/06/010/n/1922398/a0fa06245e13bf79661e80.88411626_/i/Ellen-DeGeneres.jpg"/>

           <Chat 
           name="Sandra"
           message="how are you?"
           timestamp="3 mins ago"
           profilePic="https://i.scdn.co/image/ab8f5bf33cad54f0a463050368de53f6644e7d04"/>

        <Chat 
           name="Natasha"
           message="Hey!! you?"
           timestamp="15 mins ago"
           profilePic="https://m.media-amazon.com/images/M/MV5BNzcwMmVmZTItYmVmYS00OWIxLWIxNWQtNjcyMGJlZDhiNmZkXkEyXkFqcGdeQXVyNTU1NjIzMDc@._V1_UY317_CR14,0,214,317_AL_.jpg"/>

        <Chat 
           name="Ellyse"
           message="Hey!! how are you?"
           timestamp="35 mins ago"
           profilePic="https://i0.wp.com/femalecricket.com/wp-content/uploads/2019/10/Ellyse-Perry-Sydney-Sixers.jpg?resize=600%2C394&ssl=1"/>

        </div>
    )
}

export default Chats
