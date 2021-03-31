import React from 'react'
import "./Sidebar.css"
import './SidebarChat'
import ChatIcon from '@material-ui/icons/Chat';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
import MyPhoto from './me.jpg'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={MyPhoto} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
              </div>        
            </div>
            <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                  <SearchOutlinedIcon />
                    <input 
                      placeholder="Search or start new chat" 
                      type="text"
                    />
                </div>
            </div>
            <div className="sidebar__chats">
              < SidebarChat/>
              < SidebarChat/>
              < SidebarChat/>
            </div>
        </div>
  )
}



                        

export default Sidebar
