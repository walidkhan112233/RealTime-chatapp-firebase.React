import React from 'react'
import "./LeftSidebar.css"
import AssestsIMG from '../../assets/assests'
export default function LeftSidebar() {
  return (<>
    <div className="leftsidebar">
        <div className="ls-top">
            <div className="ls-nav">
                <img src={AssestsIMG.logotxtRight} className='logo' />
                <div className="menu">
                    <img src={AssestsIMG.MenuIcon}      />
                </div>
            </div>
            <div className="ls-search">
                <img src={AssestsIMG.SearchIcon}  className='search-icon' />
                <input type="text" placeholder='Search for Users...' />
            </div>
        </div>
        <div className="ls-list">
           {Array(12).fill("").map((item,index)=>(
             <div key={index} className="freinds">
             <img src={AssestsIMG.SupermanPfp} className='supermanpfp' />
             <div>
                 <p>SuperMan</p>
                     <span>Sorry, Batman</span>
                 </div>
             </div>
           ))}
        </div>
    </div>
  </>)
};

