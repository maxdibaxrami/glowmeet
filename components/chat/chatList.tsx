import React from 'react' 
import {Listbox, ListboxItem, Badge, Avatar} from "@nextui-org/react";
import {ListboxWrapper} from "./ChatWapper";
import {User} from "@nextui-org/react";
import {FavoriteIcon} from './icons/favorite'
const CHatList = () => {

  

    return <ListboxWrapper>
    <Listbox
      aria-label="Actions"
      style={{overflow:"scroll",maxHeight:"93vh"}}
      onAction={(key) => alert(key)}
    >
        {Array.from({ length: 50 }).map((value, index)=> {
            return       <ListboxItem
            endContent={<FavoriteIcon />}
            key="new">

<Badge content="" color="success" shape="circle" placement="bottom-right">
        <Avatar
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>

            <User   
                name="Jane Doe"
                description="Product Designer"
                
                />
          </ListboxItem>
        })}


      

    </Listbox>
  </ListboxWrapper>

}

export default CHatList