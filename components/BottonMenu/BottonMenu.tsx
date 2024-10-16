import { useEffect, useState } from "react";
import {Tabs, Tab, Chip} from "@nextui-org/react";
import {Profile} from "./icons/Profile";
import {Explore} from "./icons/Explore"
import {ChatIcon} from "./icons/Chat"
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import {User} from "@nextui-org/react";


const BottonMenu =() => {
    const router = useRouter()
    const pathname = usePathname()
    
    


    
  return (
    <div className="fixed items-center bottom-0 flex w-full flex-col z-50 buttommenumahdi">
      <Tabs
       aria-label="Options" 
       className="justify-around mb-4 bg-white/80" 
       color="primary" 
       style={{width:"max-content",borderRadius:10}}
       variant="bordered"
       selectedKey={pathname ? pathname.split('/')[1] : 'chat'}
       onSelectionChange={e=> {
        router.push(`/${e}`)
       }}
       >
        <Tab
          key="explore"
          className="h-10 "
          title={
            <div className="flex items-center space-x-2 h-10">
              <Explore/>
              <span>Explore</span>
            </div>
          }
        />
        <Tab
          key="chat"
          className="h-10"
          title={
            <div className="flex items-center space-x-2 h-10">
              <ChatIcon/>
              <span>Chat</span>
            </div>
          }
        />
        <Tab
          key="profile"
          className="h-10"
          title={
            <div className="flex items-center space-x-2 h-10">
              <Profile/>
              <span>Profile</span>
            </div>
          }
        />
      </Tabs>
    </div> 
  );
}

export {BottonMenu}