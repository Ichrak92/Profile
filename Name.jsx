import React from 'react'
import photo from './photo.PNG'
const Name = (props)=>{

    const text =
    {
        photo : photo,
        Name: {firstName: "Ichrak",lastName: "Ben Asker"},
        profileLink: "https://www.facebook.com/ichrak.benasker"
    }
    return(
        <div>
        <img src={text.photo} />
        <h6>{text.Name.firstName}</h6>
        <h6>{text.Name.lastName}</h6>
        <button onClick={()=>{
            window.location = text.profileLink
        }}>
        clickMe
        </button>
        </div>
    )


}
export default Name;