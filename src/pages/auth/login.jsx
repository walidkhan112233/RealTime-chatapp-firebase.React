import "./login.css";
import AssestsIMG from "../../assets/assests";
import { useState } from "react";

const Login = () => {
  const [currentState,setCurrentState]= useState("ChitChat SignUp");
  return (
    <>
      <div className="Login">
        <img
          src={AssestsIMG.BackgroundHome}
          alt="Background"
          className="chitchatBackground"
        />
        <form className="login-form">
          <h2>
            <img src={AssestsIMG.ChitChaticon} className="icon" />
            {currentState}</h2>
          {currentState === "ChitChat SignUp"?<input type="text" placeholder="Username..." className="form-input" required />:null}
          <input type="email" placeholder="Enter your email address..." className="form-input" required />
          <input type="password" placeholder="Enter password..." className="form-input" required />
          <button type="submit" >{currentState === "ChitChat SignUp" ? "Create Account":"Login"}</button>
         <div className="login-term">
            <input type="checkbox" required/>
            <p>Agree to the terms of use and privacy policy.</p>
            </div> 
          
            <div className="login-forget">
              {
                currentState === "ChitChat SignUp"? <p className="login-toggle" >Already have an Account? <span onClick={()=>setCurrentState("Login")} >Login here!</span> </p>
                :  <p className="login-toggle">Create an Account!<span onClick={()=>setCurrentState("ChitChat SignUp")} >Click here!</span> </p>
              }
            </div>  
        </form>
      </div>  
    </> 
  );
};

export default Login;
