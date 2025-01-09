
import { useState } from "react"
import AssestsIMG from "../../assets/assests"
import "./updateprofile.css"
export default function UpdateProfile(){

  const [image,setImage]= useState(false)




  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept=".png , .jpg , .jpeg" hidden/>
            <img src={image? URL.createObjectURL(image)  : AssestsIMG.AvatarIcon}  className="avataricon" />
            Upload Profile image
          </label>
          <input type="text" placeholder="Your name..." required />
          <textarea placeholder="Write your profile bio..." required></textarea>
          <button type="submit">Save</button>
          </form>
          <img className="pfp" src={ image? URL.createObjectURL(image)  : AssestsIMG.chitchatIcon}/>
      </div>
    </div>     
      
  )
}

