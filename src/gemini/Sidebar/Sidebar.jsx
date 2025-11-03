import React, { useContext, useState } from 'react'
import './Sidebar.css';
import {assets} from '../../assets/assets';
import Context from '../../context/context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const {onSend, prevPrompt, setrecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt) =>{
        setrecentPrompt(prompt)
        await onSend(prompt)
    }
  return (
   <div className={`sidebar ${extended ? "expanded" : ""}`}>
       <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new_chat">
              <img src={assets.plus_icon} alt=""/>
            {extended?<p>New Chat</p>:null} 
        </div>
        {extended? <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index)=>{
                return (
                     <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt='' />
                <p>{item} ...</p>
            </div>
                )
            })}
           
        </div>: null}
       
       </div>
       <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} />
            {extended? <p>Help</p>:null}
        </div>

         <div className="bottom-item recent-entry">
            <img src={assets.history_icon} />
            {extended? <p>Activity</p> :null}
           
        </div>

         <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} />
             {extended?<p>setting</p>:null}
            
        </div>

       </div>
    </div>
  )
}

export default Sidebar;
