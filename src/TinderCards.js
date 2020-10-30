import React,{useEffect, useState} from 'react'
import TinderCard from "react-tinder-card"
import db from './firebase';
import "./TinderCards.css"

function TinderCards() {
    const[people, setPeople]= useState([]);

        useEffect(()=>{
            db.collection('people').onSnapshot((snapshot)=>
            setPeople(snapshot.docs.map((doc)=>doc.data())
            ))
            
        },[])

    return (
        <div>
            {/* <h1>Tinder Cards</h1> */}

            <div className="tindercards__container">
                {/* loop the people and return for every single person */}
                {people.map((person)=>(
                <TinderCard className="swipe" 
                key={person.name} 
                preventSwipe={['up','down']}>

                    <div style={{backgroundImage:`url(${person.url})`}} 
                    className="card">
                {/* go to the person and takes the name key */}
            <h3>{person.name}</h3>
                    </div>
                </TinderCard>


))}
            </div>
        </div>
      
    )
}

export default TinderCards
