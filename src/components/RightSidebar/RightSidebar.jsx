import React from 'react'
import "./RightSidebar.css"
import AssestsIMG from '../../assets/assests'



export default function RightSidebar() {
  return <>
        <div className="right-sidebar">
            <div className="rs-profile">
                 <img  src={AssestsIMG.SupermanPfp} />
                 <h3 className='pf-heading' >SuperMan <img src={AssestsIMG.GreenDot} className='dot' alt="" /></h3>
                 <p>Next time they shine your light in the sky, don't go to it.The Bat is dead. Bury it.Consider this mercy!</p>
            </div>
                <hr />
                <div className='rs-media'>
                <p>Media</p>
                <div>
                <img src={AssestsIMG.MogPfp} alt="" />
                <img src={AssestsIMG.WbrotherPfp} alt="" />
                <img src={AssestsIMG.JohanPfp} alt="" />
                <img src={AssestsIMG.JohanPfp} alt="" />
                <img src={AssestsIMG.JohanPfp} alt="" />
                <img src={AssestsIMG.batmanpfp} alt="" />
                <img src={AssestsIMG.batmanpfp} alt="" />
                <img src={AssestsIMG.batmanpfp} alt="" />
                <img src={AssestsIMG.batmanpfp} alt="" />
                <img src={AssestsIMG.AvatarIcon} alt="" />
                <img src={AssestsIMG.AvatarIcon} alt="" />
                <img src={AssestsIMG.AvatarIcon} alt="" />
                <img src={AssestsIMG.AvatarIcon} alt="" />
                <img src={AssestsIMG.JohanPfp} alt="" />
                </div>    
            </div>
            <button>Log Out</button>
        </div>
  
  </>
};

