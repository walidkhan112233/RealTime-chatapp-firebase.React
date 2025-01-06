import React from 'react'
import "./LeftSidebar.css"
import AssestsIMG from '../../assets/assests'
export default function LeftSidebar() {
  return (<>
    <div className="leftsidebar">
        <div className="ls-top">
            <div className="ls-nav">
                <img src={AssestsIMG.ChitChaticon} className='logo' />
                <div className="menu">
                    <img src={AssestsIMG.MenuIcon}      />
                </div>
            </div>
            <div className="ls-search">
                <input type="text" />
            </div>
        </div>
    </div>
  </>)
};

