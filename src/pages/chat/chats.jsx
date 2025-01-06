import React from "react"
import "./chat.css"
import LeftSidebar from "../../components/LeftSidebar/leftsidebar"
import ChatBox from "../../components/ChatBox/chatbox"
import RightSidebar from "../../components/RightSidebar/RightSidebar"
export default function Chats() {
  return <>
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar/>
        <ChatBox/>
        <RightSidebar/>

      </div>
    </div>



  </>
};