import React from 'react'
import "./chatbox.css"
import AssestsIMG from '../../assets/assests'
export default function ChatBox() {
    return (<>
    <div className="chat-box">
        <div className="chat-user">
            <img src={AssestsIMG.SupermanPfp}/>
            <p>SuperMan <img className='dot' src={AssestsIMG.GreenDot} alt="" /></p>
            <img src={AssestsIMG.helpicon} className='help' />
        </div>

        <div className="chat-msg">
            <div className="s-msg">
                <p className="msg">Tell me! Do you Bleed?</p>
                <div>
                    <img src={AssestsIMG.batmanpfp} />
                    <p>3:30 PM</p>                    
                </div>
            </div>
            <div className="s-msg">
                <img className='msg-img' src={AssestsIMG.MogPfp} />
                <div>
                    <img src={AssestsIMG.batmanpfp} />
                    <p>3:30 PM</p>                    
                </div>
            </div>
            <div className="r-msg">
                <p className="msg">Sorry, Batman</p>
                <div>
                    <img src={AssestsIMG.SupermanPfp} />
                    <p>3:30 PM</p>                    
                </div>
            </div>
        </div>




        <div className="chat-input">
            <input type="text" placeholder='Type a message...' />
            <input type="file" id='image'  accept='image/png , image/jpeg' hidden />
            <label htmlFor="image">
                <img src={AssestsIMG.GalleryIcon}  />
            </label>
            <img src={AssestsIMG.SendMsgIcon}  />
        </div>
    </div>
    </>)
};

